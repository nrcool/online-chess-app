import express from "express";
import http from "http"
import cors from "cors"
import morgan from "morgan"
import { Server } from "socket.io"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import roomRoutes from "./routes/roomRoutes.js"
import mongoose from "mongoose";
import RoomCollection from "./models/roomSchema.js";
import UserCollection from "./models/userSchema.js";

//load env variables
dotenv.config()

//port
const PORT = process.env.PORT || 8080; 

//initializing express server
const app = express()
app.use(express.json())
 app.use(express.urlencoded({extended:true}))
const server = http.createServer(app);

const io = new Server(server,{cors:{
    origin:process.env.NODE_ENV?"http://localhost:8080":"https://online-chess-app.vercel.app/",
    exposedHeaders:["token","socketId"]
}});


//middlewares
/* app.use(cors({origin:"http://localhost:3000",exposedHeaders:["token","socketId"]})) */ //handle cors error(allow all cross origins)
 //parse json data

 //parse form-urlencoded data
app.use(express.static("views/public")) //serve static files from public folder
app.use(morgan("dev"))
app.use(express.static("views/build"))



io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`);
  /* socket.on("user_connected",async({socketId,userId })=>{
    console.log(userId,socketId)
    const user= await UserCollection.findByIdAndUpdate(userId,{
        socketId
    })
  }) */
// _________________________________________________________________

app.get("/",(req,res,next)=>{
    res.sendFile("./views/build/index.html",{root:"."})
})


//create new room
socket.on("create_room",async ({roomName,userId})=>{
    console.log("create_room")

    await RoomCollection.create({roomName,userId})
    // send all room
    const rooms = await RoomCollection.find().populate("players")
    const user = await UserCollection.findById(userId)
    io.emit("room_created", rooms,user)
} )

//join room
socket.on("join_room",async ({userId,roomId})=>{
    const room = await RoomCollection.findById(roomId)
    if(room && !room.players.includes(userId.toString())){
        socket.join(room._id.toString())
        room.players.push(userId)
        await room.save()
        const user = await UserCollection.findByIdAndUpdate(userId,{$set:{room:room._id}},{new:true})
        // send all updated rooms data
        const rooms = await RoomCollection.find().populate("players")
        io.emit("room_created", rooms,user)
    }

    //starting game
    socket.on("start_game",async ({userId,roomId,game,playerTurn,outBlack,outWhite,countDown})=>{
        console.log(playerTurn)
        const room = await RoomCollection.findById(roomId).populate("players")
        game.reverse()
        const otherBoard=game.map((box,i)=>({...box,id:63-i}))
       
        const player=room.players.filter(player=>player._id.toString()!==userId.toString())[0]
       const otherPlayer= player.socketId
        io.to(otherPlayer).emit("game_started",{otherBoard,playerTurn,outBlack,outWhite,countDown})
    })

})
//play turn
socket.on("turn",async ({userId,roomId,updatedGame,playerTurn,outBlack,outWhite,countDown})=>{
    const room = await RoomCollection.findById(roomId).populate("players")
    updatedGame.reverse()
    const otherBoard=updatedGame.map((box,i)=>({...box,id:63-i}))
   
    const player=room.players.filter(player=>player._id.toString()!==userId.toString())[0]
    const otherPlayer= player.socketId
    console.log( playerTurn, "changed to =>",player._id.toString())
    io.to(otherPlayer).emit("game_started",{otherBoard,playerTurn:player._id.toString(),outBlack,outWhite,countDown})
})


//leave room
socket.on("leave_room",async ({userId, roomId})=>{
    console.log("leave",roomId,userId)
    const room = await RoomCollection.findByIdAndUpdate(roomId,{$pull:{players:userId}},{new:true})
    const user = await UserCollection.findByIdAndUpdate(userId,{room:null})
    socket.leave(roomId)
 // send all updated rooms data
 const rooms = await RoomCollection.find().populate("players")
 io.emit("after_leave_room_created", rooms, userId)

})



// _____________________________________________________________________
  socket.on("disconnect",async()=>{
    console.log(`user disconnected ${socket.id}`)

    const user = await UserCollection.findOne({socketId:socket.id})
    
    if(user){
        console.log(user.firstName)
        const room = await RoomCollection.findByIdAndUpdate(user.room, {$pull:{players:user._id}},{new:true})
        socket.leave(user.room)
        user.socketId=null;
        user.room=null;
        
        await user.save()
         // send all updated rooms data
  const rooms = await RoomCollection.find().populate("players")
  io.emit("room_created", rooms,user)
    }



  })
});



//Routes
// users
app.use("/users",userRoutes)
// rooms
app.use("/rooms",roomRoutes)

//error handling middleware
app.use((err,req,res,next)=>{
    res.status(err.status||500).json({
        success:false, message:err.message
    })
})

mongoose.connect(process.env.URI,{dbName:process.env.DB}).then(()=>{
    console.log("👍,Connected to DB successfully! ")
    server.listen(PORT, ()=>console.log(`🔥,Server is running 🏃 on port: ${PORT}`))
}).catch(err=>{
    console.error(err.message)
})
//listening all requests

import React, { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { socket } from "../socket.js";
import GameBoard from "./chess-components/GameBoard";
import OutWhite from "./chess-components/OutWhite";
import OutBlack from "./chess-components/OutBlack";
import "./chess-components/styles/style.css"
import InviteFriends from "./InviteFriends";
import CountDown from "../CountDown";
export default function Room() {
  const { id } = useParams();
  const navigate=useNavigate()
  const { interval, setRoom, room, user, gameStart, game,rooms,setGameStart,  outBlack,
   playerTurn,
    outWhite,counter,setCountDown
     } = useContext(MyContext);
  

  const startGame = () => {
    if (room?.players.length === 2) {
      setGameStart(true)
      setCountDown({[room.players[0]._id.toString()]:{m:5,s:0},[room.players[1]._id.toString()]:{m:5,s:0}})
      counter(user._id.toString(),{[room.players[0]._id.toString()]:{m:5,s:0},[room.players[1]._id.toString()]:{m:5,s:0}})
      socket.emit("start_game", { userId: user._id, roomId: room._id ,game, playerTurn:user._id.toString(),outBlack,outWhite ,countDown:{[room.players[0]._id.toString()]:{m:5,s:0},[room.players[1]._id.toString()]:{m:5,s:0}} });
    }
  };

  const leaveRoom = () => {
    clearInterval(interval)
    socket.emit("leave_room", { userId: user._id, roomId: room._id });
  };

  useEffect(() => {
    let roomData = rooms.find(r=>r._id.toString()===id)
    console.log(user)
    setRoom(roomData)
  /*   if(user.room){
     
    }else{
      navigate("/lobby")
    } */
  }, [rooms]);

  return (

    <div className="main-room">
      <div className="room-left-section">
      <h2 className="text-2xl font-bold text-gray-800">{room?.roomName}</h2>
      <h3 className="text-lg font-medium text-gray-800">Joined Players:</h3>
          <ul className="mt-2 space-y-2">
              {room?.players?.map((user) => (
                <li key={user.id} className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src={user.imageUrl}
                    alt="User"
                  />
                  <span className="text-gray-300">{user.firstName}</span>
                </li>
              ))}
            </ul>
            <div className="p-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={leaveRoom}>
            Leave Room
          </button>
         
        </div> <InviteFriends/>
       
      </div>
      <div className="room-right-section">
      {gameStart ? (
              <div className="board-game">
                
                <OutWhite />
                <GameBoard />
                <OutBlack />
              </div>
            ) : (
              <button
                onClick={startGame}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Start Game
              </button>
            )}
      </div>
    </div>
   /*  <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full max-w-full mx-auto bg-white shadow-lg rounded-lg grid grid-rows-3 grid-flow-col gap-4">
        <div className="p-2 border-b border-gray-300 row-span-3 col-span-1">
          <h2 className="text-2xl font-bold text-gray-800">{room?.roomName}</h2>
       
  
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">Joined Players:</h3>
          <ul className="mt-2 space-y-2">
              {room?.players?.map((user) => (
                <li key={user.id} className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src={user.imageUrl}
                    alt="User"
                  />
                  <span className="text-gray-300">{user.firstName}</span>
                </li>
              ))}
            </ul>
        </div>
        <div className="p-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={leaveRoom}>
            Leave Room
          </button>
        </div>
     
<InviteFriends/>
        </div>
        <div className="p-4 border-r border-gray-300 row-span-3 col-span-9">
          <div className="bg-gray-200 rounded-lg h-full">
          {gameStart ? (
              <div className="grid grid-cols-3 grid-rows-1">
                <OutWhite />
                <GameBoard />
                <OutBlack />
              </div>
            ) : (
              <button
                onClick={startGame}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Start Game
              </button>
            )}
          </div>
        </div>
      
      </div>
    </div> */
  );
}

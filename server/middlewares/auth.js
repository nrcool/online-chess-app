import httpErrors from "http-errors"
import jwt from "jsonwebtoken"
import UserCollection from "../models/userSchema.js"

export const auth =async(req,res,next)=>{
    try{
    const {token}=req.headers
 
    const decode = jwt.verify(token,process.env.SECRET_KEY)
    if(decode){
      const user = await UserCollection.findById(decode._id)
    user.socketId=req.headers.socketid;
      console.log(user.socketId,"socket")
      await user.save() 
    req.user=user;
    next()
    }else{
      throw new Error("invalid token")
    }
    }catch(err){
        console.log(err.message)
      next(new httpErrors.BadRequest(err.message));
    }
  
  
  }
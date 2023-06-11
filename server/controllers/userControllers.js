import jwt from "jsonwebtoken";
import UserCollection from "../models/userSchema.js";
import httpErrors from "http-errors";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserCollection.find();
    res.json({ success: true, data: users });
  } catch (err) {
    next(
      new httpErrors.InternalServerError("Please try again in few minutes !")
    );
  }
};

export const getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserCollection.findByID(id);
    res.json({ success: true, data: user });
  } catch (err) {
    next(new httpErrors.NotFound("No record found !"));
  }
};

export const createUser = async (req, res, next) => {
  try {
    console.log(req.body)
    const user = new UserCollection(req.body);
    await user.save();
    res.json({ success: true, data: user });
  } catch (err) {
    console.log(err.message)
    next(new httpErrors.InternalServerError(err.message));
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await UserCollection.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ success: true, data: updatedUser });
  } catch (err) {
    next(new httpErrors.NotFound("No record found !"));
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserCollection.findByIdAndRemove(id);
    res.json({ success: true, data: deletedUser });
  } catch (err) {
    next(new httpErrors.NotFound("No record found !"));
  }
};


export const loginUser=async(req,res,next)=>{
  try{
    const {email,password}=req.body
    const user = await UserCollection.findOne({email,password})
    const token =jwt.sign({_id:user._id,email:user.email},process.env.SECRET_KEY)
    res.header("token",token)
    res.json({success:true, data:user})
  }catch(err){
    next(new httpErrors.NotFound(err.message));
  }
}


export const reloadUser=(req,res,next)=>{
  res.json({success:true,data:req.user})
}
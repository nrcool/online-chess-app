import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  loginUser,
  reloadUser
} from "../controllers/userControllers.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

// users routes
// get request on "/users" (GET ALL USERS)
router.get("/",auth, getAllUsers);

//get request
// verify token on page reload
router.get("/verify",auth, reloadUser)
// get request on "/users/:id" (GET SINGLE USER BY ID)
router.get("/:id", getSingleUser);
//post request on "/users" (CREATE NEW USER)
router.post("/", createUser);


//login
router.post("/login",loginUser)
//patch request on "/users/:id" (UPDATE USER BY ID)
router.patch("/:id",auth, updateUser);

//delete request on "/users/:id" (DELETE USER BY ID)
router.delete("/:id",auth, deleteUser);

export default router;

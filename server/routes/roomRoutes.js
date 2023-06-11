import { Router } from "express";
import { createRoom, deleteRoom, getAllRooms, getSingleRoom} from "../controllers/roomControllers.js";
import { auth } from "../middlewares/auth.js";



const router = Router();

//get all rooms
router.get("/",auth, getAllRooms)



//create room
router.post("/",auth, createRoom)


//get single room by id
router.get("/:id",getSingleRoom)


//delete room
router.delete("/:id", auth,deleteRoom)


export default router;
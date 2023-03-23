import  { Router }  from "express";
import { getUserById } from "../controllers/userControllers/get.user";
import { getAllUsers } from "../controllers/userControllers/get.all.users";

const router = Router();

//get all users

router.get('/all', getAllUsers);

// get specific user
router.get('/:id', getUserById);

export {router as userRouter};

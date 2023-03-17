import  {Router }  from "express";
import { getUserById } from "../controllers/get.user";

const router = Router();

router.get('/:id', getUserById);

export {router as userRouter};

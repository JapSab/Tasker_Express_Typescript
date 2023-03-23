import  { Router }  from "express";
import { getAllTasks } from "../controllers/taskControllers/get.all.tasks";
import { auth } from "../middleware/auth";
import { postNewTask } from "../controllers/taskControllers/post.task";
import { updateTask } from "../controllers/taskControllers/update.task";
import { deleteTask } from "../controllers/taskControllers/delete.task";

const router = Router();

// get all tasks
router.get('/alltasks', auth, getAllTasks);

// post a new task
router.post('/newtask', auth, postNewTask);

// update existing task
router.put('/:tskId', auth, updateTask);

// delete existing task
router.delete('/:tskId', auth, deleteTask);


export {router as taskRouter};


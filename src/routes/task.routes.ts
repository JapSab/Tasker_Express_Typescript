import  { Router }  from "express";
import { getAllTasks } from "../controllers/get.all.tasks";
import * as jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';
import { Request, Response } from 'express';
import { auth } from "../middleware/auth";
import { postNewTask } from "../controllers/post.task";
import { updateTask } from "../controllers/update.task";
import { deleteTask } from "../controllers/delete.task";

const router = Router();

const jwtSecret = process.env.SECRET ;


// get all tasks
router.get('/alltasks', auth, getAllTasks);

// post a new task
router.post('/newtask', auth, postNewTask);

// update existing task
router.put('/:tskId', auth, updateTask);

// delete existing task
router.delete('/:tskId', auth, deleteTask);


export {router as taskRouter};


import { Request,  Response } from 'express';
import Taskdb from '../models/task.model';
import Userdb from '../models/user.model';
import { logIn } from './auth.login';

interface CustomRequest extends Request {
    user?: any;
}
  

export const postNewTask = async (req: Request, res: Response): Promise<Response> => {

    const user = req.session.user;
    const  newTask = new Taskdb({
        title: req.body.title,
        description: req.body.description,
        author: user.name
    });


    await newTask.save();

    return res.status(200).send({ message: 'Task successfully saved!' });

    
}
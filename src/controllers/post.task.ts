import { Request,  Response } from 'express';
import Taskdb from '../models/task.model';

interface CustomRequest extends Request {
    user?: any;
}
  

export const postNewTask = async (req: CustomRequest, res: Response): Promise<Response> => {

    const user = req.session.user;
    if(!user) {
        res.send({ message: "user is not authenticated."})
    } else {
        const  newTask = new Taskdb({
            title: req.body.title,
            description: req.body.description,
            author: user.name
        });
    
        await newTask.save();
    
        return res.status(200).send({ message: 'Task successfully saved!' });
    
    }
    
    
}
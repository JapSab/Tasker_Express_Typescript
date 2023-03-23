import { Request,  Response } from 'express';
import Taskdb from '../models/task.model';
import Userdb from '../models/user.model';

interface CustomRequest extends Request {
    user?: any;
}

export const updateTask = async (req: CustomRequest, res: Response): Promise<Response> => {
    
    const taskId = req.params.tskId;
    const task = await Taskdb.findById(taskId);

    const updatedTitle = req.body.title;
    const updatedDescription = req.body.description;

    if (task.author == req.user.userName) {
        task.title = updatedTitle;
        task.description = updatedDescription;
        await task.save();
        return res.status(200).send({ message: "task updated successfully." });
    } else {
        return res.send({ message: "could not update task." });
    }
};
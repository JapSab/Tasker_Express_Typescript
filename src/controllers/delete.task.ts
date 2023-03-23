import { Request,  Response } from 'express';
import Taskdb from '../models/task.model';

interface CustomRequest extends Request {
    user?: any;
}

export const deleteTask = async (req: CustomRequest, res: Response): Promise<Response> => {
    
    const taskId = req.params.tskId;
    const task = await Taskdb.findById(taskId);
    const user = req.session.user;
    if(!user) {
        res.send({ message: "user is not authenticated."})
    } else {
        if (task.author == req.user.userName) {
            await task.deleteOne();
            return res.status(200).send({ message: "task deleted successfully." });
        } else {
            return res.send({ message: "could not delete task." });
        }
    }
};
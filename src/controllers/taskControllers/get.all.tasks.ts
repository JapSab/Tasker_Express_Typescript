import { Request, Response } from 'express';
import Taskdb from '../../models/task.model';

export const getAllTasks= async (req: Request, res: Response): Promise<Response> => {
    const taskList = await Taskdb.find();
    return res.status(200).json({ tasks: taskList });
};
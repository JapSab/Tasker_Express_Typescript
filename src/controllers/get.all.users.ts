import { Request, Response } from 'express';
import Userdb from '../models/user.model';

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await Userdb.find();

    return res.status(200).json(users);
};
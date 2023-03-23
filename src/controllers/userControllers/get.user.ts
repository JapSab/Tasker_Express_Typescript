import { Request, Response } from 'express';
import Userdb from '../../models/user.model';

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const userId = req.params.id;
    const user = await Userdb.findById(userId);

    return res.status(200).json(user);
};
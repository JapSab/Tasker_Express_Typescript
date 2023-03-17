import { Request, Response } from 'express';
import Userdb from '../models/user.model';
import * as bcrypt from 'bcrypt'

export const logIn = async (req: Request, res: Response): Promise<Response> => {
    const user = await Userdb.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ message: "Invalid email or password." });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send({ message: "Wrong password." });

    return res.status(200).send({ message: "user successfully logged in."});

        
}
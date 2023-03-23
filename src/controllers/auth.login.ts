import { Request, Response } from 'express';
import mongoose from 'mongoose';
import  Userdb  from '../models/user.model';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';

declare module 'express-session' {
    interface SessionData {
      user: any; 
    }
  }

  interface CustomRequest extends Request {
    user?: any;
  }
  

export const logIn = async (req: CustomRequest, res: Response): Promise<Response> => {
    const user = await Userdb.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ message: "Invalid email or password." });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send({ message: "Wrong password." });

    const token = jwt.sign({
        userId: user._id.toString() ,
        userName: user.name 
        }, 
        process.env.SECRET,
        { expiresIn: '1h' }
    );

        req.session.user = { id: user._id, name: user.name };

    return res.cookie('token', token, { httpOnly: true}).send({  message: "user successfully logged in.", token: token });      
};
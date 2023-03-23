import { Request, response, Response } from 'express';
import Userdb from '../../models/user.model';
import * as bcrypt from 'bcrypt';

// export const find = async ( req: Request, res: Response): Promise<Response> => {
//     const fetchedUsers = await Userdb.find();

//     return res.send({fetchedUsers})

// }


export const signUp = async (req: Request, res: Response): Promise<Response> => {
    try {
        // Checking if inputs are filled
        const user = await Userdb.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send({ message: 'User already registered' });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Creating user and saving in db
        const newUser = new Userdb({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,

        });
        

        await newUser.save();

        return res.send({ message: 'User successfully saved!' });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: error.message || 'Error occurred while creating a user'
        });
    }
};

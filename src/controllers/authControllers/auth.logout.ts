import { Request, Response } from 'express';

export const logOut = async (req: Request, res: Response): Promise<Response> => {
    req.session.destroy( err => console.log(err));
    return res.send({ message: "session destroyed successfully."});
}
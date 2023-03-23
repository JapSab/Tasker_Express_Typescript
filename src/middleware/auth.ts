import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
  user?: any;
}

export const auth = function (req: CustomRequest, res: Response, next: NextFunction): Response {
  const authHeader = req.headers['authorization'];
  const token = authHeader && (authHeader as string).split(' ')[1];
  
  if (!token) return res.status(401).send('Unauthorized 1');
  try {
    jwt.verify(token, process.env.SECRET, (err: any, user: any) => {
      req.user = user;
      next();
    });   
  } catch (err){
    console.log(err);
  }

}

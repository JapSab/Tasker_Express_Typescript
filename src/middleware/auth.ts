import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
  user?: any;
}

export const auth = function (req: Request, res: Response, next: NextFunction): Response{
  const authHeader = req.headers['authorization'];
  const token = authHeader && (authHeader as string).split(' ')[1];
  
  if (!token) return res.status(401).send('Unauthorized 1');
  
  jwt.verify(token, process.env.SECRET, (err: any, user: any) => {
    if (err) return res.status(403).send('Unauthorized 2');
    // (req as CustomRequest).user = user;
    next();
  });

}

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET: any = process.env.JWT_SECRET;

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    // jwt.verify(token, JWT_SECRET , (err, decoded) => {
    //     if(err) {
    //         res.status(401).json({
    //             msg: "Unauthorized"
    //         })
    //     } else {
    //         req.user = decoded
    //         next()
    //     }
    // })
  } else {
    res.status(401).json({
      msg: 'Unauthorized',
    });
  }
};

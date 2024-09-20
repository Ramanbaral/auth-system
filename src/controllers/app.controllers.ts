import { Request, Response } from 'express';

export const healthCheck = (req: Request, res: Response) => {
  res.send('Up and Running');
};

export const userInf = (req: Request, res: Response) => {
  // const username = req.user.username
  res.end();
};

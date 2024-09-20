import { Request, Response } from "express";

export const signin = (req: Request, res: Response) => {
  const username = req.body.un;
  const pwd = req.body.pwd;

  res.end();
};

export const signup = (req: Request, res: Response) => {
  const email = req.body.em;
  const username = req.body.un;
  const pwd = req.body.pwd;

  res.end();
}
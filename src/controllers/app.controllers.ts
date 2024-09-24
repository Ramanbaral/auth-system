import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const p = new PrismaClient();

export const healthCheck = (req: Request, res: Response) => {
  res.send('Up and Running');
};

export const userInf = async (req: Request, res: Response) => {
  const username = req.user.username;

  try {
    const user = await p.user.findUniqueOrThrow({
      where: {
        username: username,
      },
    });

    res.json({
      msg: 'success',
      user,
    });
  } catch (e) {
    console.log(e);
    console.error("User doesn't exist");

    res.status(400).json({
      error: true,
      msg: "can't find user",
    });
  }
};

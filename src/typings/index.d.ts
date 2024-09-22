import express from 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        username: string;
      };
    }
  }
}

export interface IuserInReq {
  username: string;
}

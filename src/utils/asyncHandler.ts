import { Request, Response, NextFunction } from 'express';

type reqHandlerType = (req: Request, res: Response, next?: NextFunction) => {};

const asyncHandler = (reqHandler: reqHandlerType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
  };
};
export default asyncHandler;

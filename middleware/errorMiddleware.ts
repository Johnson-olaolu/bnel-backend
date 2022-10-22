import { NextFunction, Request, Response } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(err);
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode === 200 ? 500 : err.statusCode;
  res.status(statusCode || 500);
  res.json({
    message: { success: false, message: err.errors ? err.errors[0].message : err.message },
    stack: err.stack,
  });
};

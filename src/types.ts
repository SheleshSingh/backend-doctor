import { NextFunction, Request, Response } from 'express';

export type ApiProps = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

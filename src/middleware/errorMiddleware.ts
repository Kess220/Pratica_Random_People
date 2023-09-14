import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  res.status(500).json({ message: "Erro interno do servidor" });
};

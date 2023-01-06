import { Request, Response, NextFunction } from "express";

function authorize(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  next();
}

export { authorize };

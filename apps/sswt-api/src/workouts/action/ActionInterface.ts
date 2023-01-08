import { Request, Response } from "express";

export interface ActionInterface {
  execute(req: Request, res: Response): Promise<void>;
}

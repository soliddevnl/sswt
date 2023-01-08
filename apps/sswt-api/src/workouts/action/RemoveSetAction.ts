import { Request, Response } from "express";
import { inject, injectable } from "inversify";

import TYPES from "src/container/types";
import { SetRepository } from "src/workouts/repository/SetRepository";

@injectable()
export class RemoveSetAction {
  constructor(@inject(TYPES.SetRepository) private readonly setRepository: SetRepository) {}

  async execute(req: Request, res: Response) {
    const setId = parseInt(req.params.setId);

    const set = await this.setRepository.remove(setId);

    res.status(200).json(set);
  }
}
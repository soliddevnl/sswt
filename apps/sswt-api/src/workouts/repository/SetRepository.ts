import { PrismaClient } from "@prisma/client";
import { injectable, inject } from "inversify";
import TYPES from "src/container/types";
import { createSetDto, Set } from "src/workouts/dto/Set";

@injectable()
export class SetRepository {
  constructor(@inject(TYPES.PrismaClient) private readonly db: PrismaClient) {}

  async create(exerciseId: number, reps: number, weight: number): Promise<Set> {
    const set = await this.db.set.create({
      data: {
        reps: reps,
        weight: weight,
        exerciseId: exerciseId,
      },
    });

    return createSetDto(set);
  }

  async update(setId: number, reps: number, weight: number): Promise<Set> {
    const set = await this.db.set.update({
      where: {
        id: setId,
      },
      data: {
        reps: reps,
        weight: weight,
      },
    });

    return createSetDto(set);
  }
}

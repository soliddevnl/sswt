import { Set as SetModel } from "@prisma/client";

export interface Set {
  id: number;
  reps: number;
  weight: number;
}

export function createSetDto(set: SetModel): Set {
  return {
    id: set.id,
    reps: set.reps,
    weight: set.weight,
  };
}

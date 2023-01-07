import { Set as SetModel } from "@prisma/client";

export interface Set {
  id: number;
}

export function createSetDto(set: SetModel): Set {
  return {
    id: set.id,
  };
}

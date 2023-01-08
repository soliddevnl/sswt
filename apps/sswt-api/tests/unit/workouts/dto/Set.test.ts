import { createSetDto } from "src/workouts/dto/Set";
import { Set as SetModel } from "@prisma/client";

describe("Set DTO", () => {
  it("should create a set DTO from a set db model", () => {
    const model: SetModel = {
      id: 1,
      reps: 10,
      weight: 8850,
      exerciseId: 8,
      createdAt: new Date("2023-01-08T10:31:30+01:00"),
      updatedAt: new Date("2023-01-08T10:31:30+01:00"),
    };

    const setDto = createSetDto(model);
    expect(setDto.id).toBe(1);
    expect(setDto.reps).toBe(10);
    expect(setDto.weight).toBe(8850);
  });
});

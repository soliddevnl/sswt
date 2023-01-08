import { Container } from "inversify";
import "reflect-metadata";
import TYPES from "./types";
import { CreateWorkoutAction } from "src/workouts/action/CreateWorkoutAction";
import { AddExerciseToWorkoutAction } from "src/workouts/action/AddExerciseToWorkoutAction";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { DummyUserContext } from "src/workouts/context/DummyUserContext";
import { PrismaClient } from "@prisma/client";
import { ExerciseRepository } from "src/workouts/repository/ExerciseRepository";
import { RemoveExerciseFromWorkoutAction } from "src/workouts/action/RemoveExerciseFromWorkoutAction";
import { AddSetAction } from "src/workouts/action/AddSetAction";
import { UpdateSetAction } from "src/workouts/action/UpdateSetAction";
import { SetRepository } from "src/workouts/repository/SetRepository";
import { RemoveSetAction } from "src/workouts/action/RemoveSetAction";

const container = new Container();
container.bind<CreateWorkoutAction>(TYPES.CreateWorkoutAction).to(CreateWorkoutAction);
container.bind<AddExerciseToWorkoutAction>(TYPES.AddExerciseToWorkoutAction).to(AddExerciseToWorkoutAction);
container.bind<AddSetAction>(TYPES.AddSetAction).to(AddSetAction);
container.bind<UpdateSetAction>(TYPES.UpdateSetAction).to(UpdateSetAction);
container.bind<RemoveSetAction>(TYPES.RemoveSetAction).to(RemoveSetAction);
container
  .bind<RemoveExerciseFromWorkoutAction>(TYPES.RemoveExerciseFromWorkoutAction)
  .to(RemoveExerciseFromWorkoutAction);

container.bind<WorkoutRepository>(TYPES.WorkoutRepository).to(WorkoutRepository);
container.bind<ExerciseRepository>(TYPES.ExerciseRepository).to(ExerciseRepository);
container.bind<SetRepository>(TYPES.SetRepository).to(SetRepository);

container.bind<DummyUserContext>(TYPES.UserContext).to(DummyUserContext);
container.bind<PrismaClient>(TYPES.PrismaClient).toConstantValue(new PrismaClient());

export default container;

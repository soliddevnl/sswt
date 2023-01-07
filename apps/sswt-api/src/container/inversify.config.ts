import { Container } from "inversify";
import "reflect-metadata";
import TYPES from "./types";
import { CreateWorkoutAction } from "src/workouts/action/CreateWorkoutAction";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { DummyUserContext } from "src/workouts/context/DummyUserContext";
import { PrismaClient } from "@prisma/client";

const container = new Container();
container.bind<CreateWorkoutAction>(TYPES.CreateWorkoutAction).to(CreateWorkoutAction);
container.bind<WorkoutRepository>(TYPES.WorkoutRepository).to(WorkoutRepository);
container.bind<DummyUserContext>(TYPES.UserContext).to(DummyUserContext);
container.bind<PrismaClient>(TYPES.PrismaClient).toConstantValue(new PrismaClient());

export default container;

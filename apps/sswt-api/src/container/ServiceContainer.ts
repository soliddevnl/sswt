import { AddExerciseToWorkoutAction } from "src/workouts/action/AddExerciseToWorkoutAction";
import { UserContext } from "src/workouts/context/UserContext";
import { WorkoutRepository } from "src/workouts/repository/WorkoutRepository";
import { DummyUserContext } from "src/workouts/context/DummyUserContext";
import { PrismaClient } from "@prisma/client";
import { ExercisesRepository } from "src/workouts/repository/ExercisesRepository";
import { GetWorkoutAction } from "src/workouts/action/GetWorkoutAction";
import { CreateWorkoutAction } from "src/workouts/action/CreateWorkoutAction";
import { UpdateWorkoutAction } from "src/workouts/action/UpdateWorkoutAction";
import { RemoveWorkoutAction } from "src/workouts/action/RemoveWorkoutAction";
import { GetExercisesAction } from "src/workouts/action/GetExercisesAction";
import { UpdateExerciseAction } from "src/workouts/action/UpdateExerciseAction";
import { GetSetsAction } from "src/workouts/action/GetSetsAction";
import { AddSetAction } from "src/workouts/action/AddSetAction";
import { UpdateSetAction } from "src/workouts/action/UpdateSetAction";
import { RemoveSetAction } from "src/workouts/action/RemoveSetAction";
import { RemoveExerciseFromWorkoutAction } from "src/workouts/action/RemoveExerciseFromWorkoutAction";
import { SetRepository } from "src/workouts/repository/SetRepository";
import { HelloAction } from "src/workouts/action/HelloAction";

export type PublicServiceTypes = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [K in keyof ServiceContainer]: ServiceContainer[K] extends Function ? K : never;
}[keyof ServiceContainer];

export class ServiceContainer {
  private static dbConnection: PrismaClient;

  async addExerciseToWorkoutAction(): Promise<AddExerciseToWorkoutAction> {
    return new AddExerciseToWorkoutAction(await this.exerciseRepository());
  }

  async userContext(): Promise<UserContext> {
    return new DummyUserContext(await this.db());
  }

  protected db(): Promise<PrismaClient> {
    if (!ServiceContainer.dbConnection) {
      ServiceContainer.dbConnection = new PrismaClient();
    }
    return Promise.resolve(ServiceContainer.dbConnection);
  }

  async workoutRepository(): Promise<WorkoutRepository> {
    return new WorkoutRepository(await this.db());
  }

  public async exerciseRepository(): Promise<ExercisesRepository> {
    return Promise.resolve(new ExercisesRepository(await this.db()));
  }

  async helloAction(): Promise<HelloAction> {
    return Promise.resolve(new HelloAction());
  }

  async addSetAction(): Promise<AddSetAction> {
    return Promise.resolve(new AddSetAction(await this.setRepository()));
  }

  async createWorkoutAction(): Promise<CreateWorkoutAction> {
    return Promise.resolve(new CreateWorkoutAction(await this.workoutRepository(), await this.userContext()));
  }

  async getExercisesAction(): Promise<GetExercisesAction> {
    return Promise.resolve(new GetExercisesAction(await this.exerciseRepository()));
  }

  async getSetsAction(): Promise<GetSetsAction> {
    return Promise.resolve(new GetSetsAction(await this.setRepository()));
  }

  async getWorkoutAction(): Promise<GetWorkoutAction> {
    return Promise.resolve(new GetWorkoutAction(await this.workoutRepository()));
  }

  async removeExerciseFromWorkoutAction(): Promise<RemoveExerciseFromWorkoutAction> {
    return Promise.resolve(new RemoveExerciseFromWorkoutAction(await this.exerciseRepository()));
  }

  async removeSetAction(): Promise<RemoveSetAction> {
    return Promise.resolve(new RemoveSetAction(await this.setRepository()));
  }

  async removeWorkoutAction(): Promise<RemoveWorkoutAction> {
    return Promise.resolve(new RemoveWorkoutAction(await this.workoutRepository()));
  }

  public async setRepository(): Promise<SetRepository> {
    return Promise.resolve(new SetRepository(await this.db()));
  }

  async updateExerciseAction(): Promise<UpdateExerciseAction> {
    return Promise.resolve(new UpdateExerciseAction(await this.exerciseRepository()));
  }

  async updateSetAction(): Promise<UpdateSetAction> {
    return Promise.resolve(new UpdateSetAction(await this.setRepository()));
  }

  async updateWorkoutAction(): Promise<UpdateWorkoutAction> {
    return Promise.resolve(new UpdateWorkoutAction(await this.workoutRepository()));
  }
}

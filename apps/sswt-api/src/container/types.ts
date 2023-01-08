const TYPES = {
  CreateWorkoutAction: Symbol("CreateWorkoutAction"),
  AddExerciseToWorkoutAction: Symbol("AddExerciseToWorkoutAction"),
  RemoveExerciseFromWorkoutAction: Symbol("RemoveExerciseFromWorkoutAction"),
  AddSetAction: Symbol("AddSetAction"),
  UpdateSetAction: Symbol("UpdateSetAction"),
  RemoveSetAction: Symbol("RemoveSetAction"),
  WorkoutRepository: Symbol("WorkoutRepository"),
  ExerciseRepository: Symbol("ExerciseRepository"),
  SetRepository: Symbol("SetRepository"),
  UserContext: Symbol("UserContext"),
  PrismaClient: Symbol("PrismaClient"),
};

export default TYPES;

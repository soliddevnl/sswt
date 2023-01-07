const TYPES = {
  CreateWorkoutAction: Symbol("CreateWorkoutAction"),
  AddExerciseToWorkoutAction: Symbol("AddExerciseToWorkoutAction"),
  RemoveExerciseFromWorkoutAction: Symbol("RemoveExerciseFromWorkoutAction"),
  WorkoutRepository: Symbol("WorkoutRepository"),
  ExerciseRepository: Symbol("ExerciseRepository"),
  UserContext: Symbol("UserContext"),
  PrismaClient: Symbol("PrismaClient"),
};

export default TYPES;

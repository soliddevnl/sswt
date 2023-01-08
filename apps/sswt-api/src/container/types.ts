const TYPES = {
  CreateWorkoutAction: Symbol("CreateWorkoutAction"),
  UpdateWorkoutAction: Symbol("UpdateWorkoutAction"),
  RemoveWorkoutAction: Symbol("RemoveWorkoutAction"),
  GetExercisesAction: Symbol("GetExercisesAction"),
  AddExerciseToWorkoutAction: Symbol("AddExerciseToWorkoutAction"),
  UpdateExerciseAction: Symbol("UpdateExerciseAction"),
  RemoveExerciseFromWorkoutAction: Symbol("RemoveExerciseFromWorkoutAction"),
  AddSetAction: Symbol("AddSetAction"),
  GetSetsAction: Symbol("GetSetsAction"),
  UpdateSetAction: Symbol("UpdateSetAction"),
  RemoveSetAction: Symbol("RemoveSetAction"),
  WorkoutRepository: Symbol("WorkoutRepository"),
  ExerciseRepository: Symbol("ExerciseRepository"),
  SetRepository: Symbol("SetRepository"),
  UserContext: Symbol("UserContext"),
  PrismaClient: Symbol("PrismaClient"),
};

export default TYPES;

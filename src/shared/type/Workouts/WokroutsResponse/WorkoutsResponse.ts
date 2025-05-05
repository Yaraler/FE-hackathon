import { IExercise } from "../IExercise/IExercise";
import { IWorkouts } from "../IWorkouts/IWorkouts";

export interface IWorkoutsResponse {
  workouts: IWorkouts
  exercises: IExercise[];
}

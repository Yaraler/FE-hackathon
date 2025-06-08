import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise";

export interface WorkoutsExercisesActiveProps {
  exercises: IExercise[];
  handler: (exercises: IExercise) => void

}

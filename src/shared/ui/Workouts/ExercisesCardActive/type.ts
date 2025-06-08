import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise"

export interface ExercisesCardActiveProps {
  exercise: IExercise
  handlerAdd: () => void
  handlerMinus: () => void
  handlerEnd: () => void

}

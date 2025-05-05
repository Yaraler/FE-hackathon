import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise";

export interface ItemWorkoutsExercisesActiveProps {
  exercise: IExercise
  handlerAdd: () => void
  handlerMinus: () => void
  handlerEnd: () => void
  handlerNext: () => void
  handlerPrevious: () => void
}


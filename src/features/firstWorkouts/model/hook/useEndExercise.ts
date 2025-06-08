import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise"
import { useEndExerciseMutation } from "../../api/useMutation"
import { useQueryClient } from "@tanstack/react-query"




export const useEndExercise = () => {
  const endExerciseMutation = useEndExerciseMutation()
  const queryClient = useQueryClient()

  const endExercise = async (exercise: IExercise) => {

    console.log("Start")
    const res = await endExerciseMutation.mutateAsync(exercise)
    console.log(res)
    queryClient.invalidateQueries({ queryKey: ["user", "first-workout"] });

  }
  return { ...endExerciseMutation, endExercise }
}


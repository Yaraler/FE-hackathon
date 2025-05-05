import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise"
import { useEndExerciseMutation } from "../../api/useMutation"
import { useQueryClient } from "@tanstack/react-query"




export const useEndExercise = () => {
  const endExerciseMutation = useEndExerciseMutation()
  const queryClient = useQueryClient()

  const endExercise = async (exercise: IExercise) => {

    const res = await endExerciseMutation.mutateAsync(exercise)

    if (res) {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }

  }
  return { ...endExerciseMutation, endExercise }
}


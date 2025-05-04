import { useUserStore } from "@/entites/user/model/store/userStorage"
import { useCreateFirstWorkoutsMutation } from "../../api/useMutation"
import { useQueryClient } from "@tanstack/react-query"


export const useCreateFirstWorkouts = () => {
  const createFirstWorkoutsMutation = useCreateFirstWorkoutsMutation()
  const { user } = useUserStore()
  const queryClient = useQueryClient()
  const createFirstWorkouts = async () => {
    if (user?.state) {
      return "you have "
    }
    const res = await createFirstWorkoutsMutation.mutateAsync(null)
    if (res) {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
    console.log(res)

  }
  return { createFirstWorkouts }
} 

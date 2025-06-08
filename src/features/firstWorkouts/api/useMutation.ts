import { axiosPost } from "@/shared/api/axios.post";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query"
import { IloginBody, IRegistrationBody } from "@/shared/type/Auth";
import { AxiosError } from "axios";
import { IError } from "@/shared/type/Api/IError";
import { AuthResponse } from "@/features/auth/api/type";
import { createApi } from "@/shared/api/axios.create";
import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise";



export const useCreateFirstWorkoutsMutation = (): UseMutationResult<AuthResponse, AxiosError<IError>, null> => {
  const api = createApi();
  const queryClient = useQueryClient()
  return useMutation<AuthResponse, AxiosError<IError>, null>({
    mutationFn: async () => {
      const res = await api.post("/workouts/create-first-workout");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
export const useEndExerciseMutation = (): UseMutationResult<null, AxiosError<IError>, IExercise> => {
  const api = createApi();
  const queryClient = useQueryClient()
  return useMutation<null, AxiosError<IError>, IExercise>({
    mutationFn: async (exercise: IExercise) => {
      const res = await api.post("/workouts/end-first-workout", { exercise });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "first-workout"] });
    },
  });
};


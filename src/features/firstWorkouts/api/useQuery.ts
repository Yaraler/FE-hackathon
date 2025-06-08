import { useUserStore } from "@/entites/user/model/store/userStorage";
import { createApi } from "@/shared/api/axios.create";
import { IError } from "@/shared/type/Api/IError";
import { IWorkoutsResponse } from "@/shared/type/Workouts/WokroutsResponse/WorkoutsResponse";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { StyleSheet } from "react-native";




export const usegetFirstWorkoutsQuery = () => {
  const api = createApi();
  const { user } = useUserStore()
  return useQuery<IWorkoutsResponse, AxiosError<IError>>({
    queryKey: ["first-workout"],
    queryFn: async () => {
      const res = await api.get("/workouts/get-first-workout")
      return res.data
    },
  });
};


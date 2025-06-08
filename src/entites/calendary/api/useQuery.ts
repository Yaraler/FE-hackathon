import { createApi } from "@/shared/api/axios.create";
import { IError } from "@/shared/type/Api/IError";
import { IWorkoutsResponse } from "@/shared/type/Workouts/WokroutsResponse/WorkoutsResponse";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGetWorkoutsQuery = () => {
  const api = createApi();
  return useQuery<IWorkoutsResponse[], AxiosError<IError>>({
    queryKey: ["workout"],
    queryFn: async () => {
      const res = await api.get("/workouts/get-workout")
      return res.data
    },
  });
};


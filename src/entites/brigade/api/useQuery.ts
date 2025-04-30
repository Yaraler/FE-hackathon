import { axiosGet } from "@/shared/api/axios.get";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IBrigade } from "../type/IBirgade";
import { IError } from "@/shared/type/Api/IError";


export const useGetBrigadesQuery = () => {
  return useQuery<IBrigade[], AxiosError<IError>>({
    queryKey: ["brigade"],
    queryFn: async () => await axiosGet<IBrigade[]>({ path: "/brigade" }),
  });
};

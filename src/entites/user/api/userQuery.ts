import { useQuery } from "@tanstack/react-query";
import { IUser } from "../type/IUser";
import { AxiosError, AxiosResponse } from "axios";
import { IError } from "@/shared/type/Api/IError";
import { createApi } from "@/shared/api/axios.create";

export const useGetUserQuery = () => {
  const api = createApi();
  return useQuery<AxiosResponse<IUser>, AxiosError<IError>>({
    queryKey: ["user"],
    queryFn: async () => await api.get("/user")
  });
};

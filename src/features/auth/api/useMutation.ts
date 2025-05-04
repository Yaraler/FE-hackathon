import { axiosPost } from "@/shared/api/axios.post";
import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { IloginBody, IRegistrationBody } from "@/shared/type/Auth";
import { AuthResponse } from "./type";
import { IAuthVariables } from "../type/IAuthVariables";
import { AxiosError } from "axios";
import { IError } from "@/shared/type/Api/IError";




export const useAuthMutation = (): UseMutationResult<AuthResponse, AxiosError<IError>, IAuthVariables> => {
  return useMutation<AuthResponse, AxiosError<IError>, IAuthVariables>({
    mutationFn: ({ body, typePage }: IAuthVariables) => {
      if (typePage == "login") {
        return axiosPost<IloginBody, AuthResponse>("auth/login", body)
      } else {
        return axiosPost("auth/registration", body)
      }
    },
  });
};







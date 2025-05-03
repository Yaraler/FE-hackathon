import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { IError } from "@/shared/type/Api/IError";
import { createApi } from "@/shared/api/axios.create";
import { AuthResponse } from "@/features/auth/api/type";
import { IAuthVariables } from "@/features/auth/type/IAuthVariables";
import { useTokenStore } from "@/processes/tokenStorage/tokenStorage";

export const useRefreshTokenMutation = () => {
  const api = createApi();
  const { refreshToken } = useTokenStore()
  return useMutation<AuthResponse, AxiosError<IError>>({
    mutationFn: async (): Promise<AuthResponse> => {
      const response = await api.post<AuthResponse>("auth/refresh", { refreshToken });
      return response.data;
    }
  })
};

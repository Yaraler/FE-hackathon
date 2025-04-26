import { axiosPost } from "@/shared/api/axios.post";
import axios from 'axios'

import { useMutation } from "@tanstack/react-query"
type LoginResponse = {
  token: string;
  userId: string;
};

// Тип тела запроса
type LoginBody = string;
export const useEmailSubscription = () => {
  return useMutation({
    mutationFn: (email: string) => axios.post("", email),
  })
};
export const useLoginCaptainMutation = () => {

  return useMutation({
    mutationFn: (body: LoginBody) => axiosPost<LoginBody, any>("", body),
  });
};

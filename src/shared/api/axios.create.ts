import { useTokenStore } from "@/processes/tokenStorage/tokenStorage";
import axios from "axios";
import { API_PORT } from "../config/api";
export const createApi = () => {
  const { accessToken } = useTokenStore.getState();
  return axios.create({
    baseURL: API_PORT,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

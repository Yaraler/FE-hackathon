import { useTokenStore } from "@/processes/tokenStorage/tokenStorage";
import axios from "axios";
const API_PORT = "http://192.168.0.28:3000"
export const createApi = () => {
  const { accessToken } = useTokenStore.getState();

  return axios.create({
    baseURL: API_PORT,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
};

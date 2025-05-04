import { useTokenStore } from "@/processes/tokenStorage/tokenStorage";
import axios from "axios";

export interface IAxiosGet {
  path: string
}
const API_PORT = "http://localhost:3000"

export const axiosGet = async <T>({ path }: IAxiosGet): Promise<T> => {
  const response = await axios.get(`${API_PORT}${path}`);
  return response.data;
};

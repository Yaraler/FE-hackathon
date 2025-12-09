import { useTokenStore } from "@/processes/tokenStorage/tokenStorage";
import axios from "axios";
import { API_PORT } from "../config/api";

export interface IAxiosGet {
  path: string;
}

export const axiosGet = async <T>({ path }: IAxiosGet): Promise<T> => {
  const response = await axios.get(`${API_PORT}${path}`);
  return response.data;
};

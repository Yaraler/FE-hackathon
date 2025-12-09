import axios from "axios";
import { API_PORT } from "../config/api";

export const axiosPost = async <T, Y>(path: string, body: T): Promise<Y> => {
  const res = await axios.post(`${API_PORT}/${path}`, body);
  return res.data;
};

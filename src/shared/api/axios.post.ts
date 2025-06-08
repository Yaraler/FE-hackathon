import axios from 'axios'

const API_PORT = "http://192.168.0.28:3000"
export const axiosPost = async <T, Y>(path: string, body: T): Promise<Y> => {
  const res = await axios.post(`${API_PORT}/${path}`, body);
  return res.data;
};

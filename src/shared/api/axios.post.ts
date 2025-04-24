import axios from 'axios'

const API_PORT = ""
export const axiosPost = <T, Y>(path: string, body: T): Promise<Y> => {
  axios.post(`${API_PORT}/${path}`, body)
}

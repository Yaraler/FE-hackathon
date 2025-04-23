import axios from 'axios'

const API_PORT = ""
export const axiosPost = <T>(path: string, body: T) => {
  axios.post(`${API_PORT}/${path}`, body)
}

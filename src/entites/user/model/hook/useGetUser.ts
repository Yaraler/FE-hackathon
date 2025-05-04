import { useEffect } from "react"
import { useGetUserQuery } from "../../api/userQuery"
import { useUserStore } from "../store/userStorage"
import { createApi } from "@/shared/api/axios.create"
import { useRefreshToken } from "@/entites/token/model/hook/useRefreshToken"


export const useGetUser = () => {
  const { handlerRefreshToken } = useRefreshToken()
  const { data, isLoading, error } = useGetUserQuery()
  const { createUser } = useUserStore()
  useEffect(() => {
    if (data?.data) createUser(data.data)
  }, [data])
  useEffect(() => {
    if (error) handlerRefreshToken()
  }, [error])
  return { data, isLoading, error }
}

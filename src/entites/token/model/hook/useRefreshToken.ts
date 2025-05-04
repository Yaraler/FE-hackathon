import { useRefreshTokenMutation } from "../../api/useMutation"


export const useRefreshToken = () => {
  const refreshTokenMutation = useRefreshTokenMutation()
  const handlerRefreshToken = async () => {
    try {
      const response = await refreshTokenMutation.mutateAsync()

    } catch (e) {
      console.error(e)
    }
  }
  return {
    ...refreshTokenMutation, handlerRefreshToken
  }
}

import { useEffect } from "react"
import { usegetFirstWorkoutsQuery } from "../../api/useQuery"
import { compatibilityFlags } from "react-native-screens"


export const useGetFirstWorkouts = () => {
  const { data, error, isLoading } = usegetFirstWorkoutsQuery()
  useEffect(() => {
    console.log(data)
  }, [data])
  return { data, error, isLoading }
}

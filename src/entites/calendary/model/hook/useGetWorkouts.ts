import { useEffect } from "react"
import { useGetWorkoutsQuery } from "../../api/useQuery"


export const useGetWorkouts = () => {
  const { data, error, isLoading } = useGetWorkoutsQuery()
  useEffect(() => {
  }, [data])
  return { data, error, isLoading }
}


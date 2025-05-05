import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { Text, View } from "react-native"
import { useCreateFirstWorkouts } from "../../model/hook/useCreateFirstWorkouts"
import { useUserStore } from "@/entites/user/model/store/userStorage"
import { useGetFirstWorkouts } from "../../model/hook/useGetFirstWorkouts"
import { WorkoutsTitle } from "@/shared/ui/Workouts/WorkoutsTitle/WorkoutsTitle"

export const FirstWorkout = () => {
  const { createFirstWorkouts } = useCreateFirstWorkouts()
  const { user } = useUserStore()
  const { data } = useGetFirstWorkouts()
  return (
    <View>
      <Text>fa</Text>
      {!user?.FirstWorkoutICheckndicatorId &&
        <ItemButton title="start" handleSubmit={createFirstWorkouts} />
      }
      {
        user?.FirstWorkoutICheckndicatorId &&
        data &&
        <WorkoutsTitle
          name={data.workouts.name}
          description={data.workouts.description}
        />
      }
    </View>
  )
}

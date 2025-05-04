import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { Text, View } from "react-native"
import { useCreateFirstWorkouts } from "../../model/hook/useCreateFirstWorkouts"
import { useUserStore } from "@/entites/user/model/store/userStorage"

export const FirstWorkout = () => {
  const { createFirstWorkouts } = useCreateFirstWorkouts()
  const { user } = useUserStore()
  return (
    <View>
      <Text>fa</Text>
      {!user?.FirstWorkoutICheckndicatorId &&
        <ItemButton title="start" handleSubmit={createFirstWorkouts} />}
    </View>
  )
}

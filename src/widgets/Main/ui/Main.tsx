import { useUserStore } from "@/entites/user/model/store/userStorage"
import { UserMain } from "@/entites/user/ui/UserMain/UserMain"
import { PanelStartFirstWorkout } from "@/features/firstWorkouts/ui/PanelStartFirstWorkout/PanelStartFirstWorkout"
import { View } from "react-native"

export const Main = () => {
  const { user } = useUserStore()
  return (
    <View>
      <UserMain />
      {!user?.state ?
        <PanelStartFirstWorkout />
        : null
      }
    </View>
  )
}

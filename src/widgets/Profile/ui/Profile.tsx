import { useUserStore } from "@/entites/user/model/store/userStorage"
import { View } from "react-native"

export const Profile = () => {
  const { user } = useUserStore()
  return (
    <View>

    </View>
  )
}

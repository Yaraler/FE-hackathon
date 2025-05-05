import { useUserStore } from "@/entites/user/model/store/userStorage"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { useRouter } from "expo-router"
import { View } from "react-native"

export const Profile = () => {
  const { user } = useUserStore()
  const router = useRouter();
  const handlerLogOut = () => router.navigate("/auth/login")

  return (
    <View>
      <ItemButton title="log out" handleSubmit={handlerLogOut} />

    </View>
  )
}

import { useGetUser } from "@/entites/user/model/hook/useGetUser";
import { Slot } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  const { data } = useGetUser()

  return (
    <View>
      <Slot />
    </View>
  )
}

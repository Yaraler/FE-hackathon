import { useUserStore } from "@/entites/user/model/store/userStorage";
import { FirstWorkout } from "@/features/firstWorkouts/ui/FirstWorkout/FirstWorkout";
import { View, StyleSheet, Text } from "react-native"
import { vh, vw } from 'react-native-css-vh-vw';
export const Workouts = () => {
  const { user } = useUserStore()

  return (
    <View >
      {!user?.state && <FirstWorkout />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: vw(100),
  }
})

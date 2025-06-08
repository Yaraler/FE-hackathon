import { useUserStore } from "@/entites/user/model/store/userStorage"
import { UserMain } from "@/entites/user/ui/UserMain/UserMain"
import { PanelStartFirstWorkout } from "@/features/firstWorkouts/ui/PanelStartFirstWorkout/PanelStartFirstWorkout"
import { createApi } from "@/shared/api/axios.create";
import { Colors } from "@/shared/constants/Colors";
import { SafeAreaView, StyleSheet, View } from "react-native"
import { vh, vw } from 'react-native-css-vh-vw';
import { Text } from "react-native-paper";
import { WorkoutsWidgets } from "./SmallWidget/WorkoutsWidgets";

export const Main = () => {
  const { user } = useUserStore()
  return (
    <SafeAreaView style={styles.container}>
      <UserMain />
      {!user?.state ? <PanelStartFirstWorkout /> : <WorkoutsWidgets />
      }
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    width: vw(100),
    height: "100%",
    display: "flex",
    alignItems: "center",
    color: Colors.text,
  }
})


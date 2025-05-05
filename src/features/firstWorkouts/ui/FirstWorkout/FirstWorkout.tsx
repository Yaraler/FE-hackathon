import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { Text, View } from "react-native"
import { useCreateFirstWorkouts } from "../../model/hook/useCreateFirstWorkouts"
import { useUserStore } from "@/entites/user/model/store/userStorage"
import { useGetFirstWorkouts } from "../../model/hook/useGetFirstWorkouts"
import { WorkoutsTitle } from "@/shared/ui/Workouts/WorkoutsTitle/WorkoutsTitle"
import { StyleSheet } from "react-native"
import { vw } from "react-native-css-vh-vw"
import { WorkoutsSubtitle } from "@/shared/ui/Workouts/WorkoutsSubtitle/WotkoutsSubtitle"

export const FirstWorkout = () => {
  const { createFirstWorkouts } = useCreateFirstWorkouts()
  const { user } = useUserStore()
  const { data } = useGetFirstWorkouts()
  return (
    <View style={style.container}>
      {!user?.FirstWorkoutICheckndicatorId &&
        <ItemButton title="start" handleSubmit={createFirstWorkouts} />
      }
      {
        user?.FirstWorkoutICheckndicatorId &&
        data &&
        <WorkoutsTitle
          text="Your first workout"
        />
      }
      {
        user?.FirstWorkoutICheckndicatorId &&
        data &&
        <WorkoutsSubtitle
          name={data.workouts.name}
          description={data.workouts.description}
          date={data.workouts.day}
        />
      }

    </View>
  )
}
const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: vw(100),
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

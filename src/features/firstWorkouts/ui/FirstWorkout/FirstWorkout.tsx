import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { Text, View } from "react-native"
import { useCreateFirstWorkouts } from "../../model/hook/useCreateFirstWorkouts"
import { useUserStore } from "@/entites/user/model/store/userStorage"
import { useGetFirstWorkouts } from "../../model/hook/useGetFirstWorkouts"
import { WorkoutsTitle } from "@/shared/ui/Workouts/WorkoutsTitle/WorkoutsTitle"
import { StyleSheet } from "react-native"
import { vw } from "react-native-css-vh-vw"
import { WorkoutsSubtitle } from "@/shared/ui/Workouts/WorkoutsSubtitle/WotkoutsSubtitle"
import { WorkoutsExercisesActive } from "@/shared/ui/Workouts/WorkoutsExercisesActive/WorkoutsExercisesActive"
import { StartFirstWorkout } from "../StartFirstWorkout/StartFirstWorkout"

export const FirstWorkout = () => {
  const { createFirstWorkouts } = useCreateFirstWorkouts()
  const { user } = useUserStore()
  const { data, error } = useGetFirstWorkouts()
  const handlerChange = () =>
  return (
    <View style={style.container}>
      {!user?.FirstWorkoutICheckndicatorId &&
        <StartFirstWorkout error={error?.message} handlerStart={createFirstWorkouts} />
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
        <WorkoutsExercisesActive
          exercises={data.exercises}
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

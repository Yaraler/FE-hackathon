import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { Text, View } from "react-native"
import { useCreateFirstWorkouts } from "../../model/hook/useCreateFirstWorkouts"
import { useUserStore } from "@/entites/user/model/store/userStorage"
import { useGetFirstWorkouts } from "../../model/hook/useGetFirstWorkouts"
import { WorkoutsTitle } from "@/shared/ui/Workouts/WorkoutsTitle/WorkoutsTitle"
import { StyleSheet } from "react-native"
import { vw } from "react-native-css-vh-vw"
import { WorkoutsExercisesActive } from "@/shared/ui/Workouts/WorkoutsExercisesActive/WorkoutsExercisesActive"
import { StartFirstWorkout } from "../StartFirstWorkout/StartFirstWorkout"
import { useEndExercise } from "../../model/hook/useEndExercise"
import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise"
import { WorkoutsDate } from "@/shared/ui/Workouts/WorkoutsDate/WorkoutsDate"

export const FirstWorkout = () => {
  const { createFirstWorkouts } = useCreateFirstWorkouts()
  const { user } = useUserStore()
  const { data, error } = useGetFirstWorkouts()
  const { endExercise } = useEndExercise()
  const handlerChange = async (exercises: IExercise) => {
    console.log(exercises)
    await endExercise(exercises)
  }
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
        <WorkoutsDate
          date={data.workouts.day} />
      }

      {
        user?.FirstWorkoutICheckndicatorId &&
        data &&
        <WorkoutsExercisesActive
          handler={handlerChange}
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

import { View } from "react-native"
import { WorkoutsExercisesActiveProps } from "./type"
import { ItemWorkoutsExercisesActive } from "../ItemWorkoutsExercisesAactive/ItemWorkoutsExercisesActive"
import { useState } from "react"
import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise"
import { SwitcherExercisesPanel } from "../SwitcherExerecisesPanel/SwitcherExercisesPanel"

export const WorkoutsExercisesActive: React.FC<WorkoutsExercisesActiveProps> = ({ exercises }) => {
  const [userExercises, setUserExercises] = useState<IExercise[]>([...exercises])
  const [currentExercises, setCurrentExercises] = useState(0)
  const handlerAdd = (id: string) => {
    const newExercises = userExercises.map((elem) => {
      if (elem._id == id) {
        if (!elem.userCount) {
          elem.userCount = 1
        } else {
          ++elem.userCount
        }
        return elem
      }
      return elem
    })
    setUserExercises(newExercises)
  }
  const handlerMinus = (id: string) => {
    const newExercises = userExercises.map((elem) => {
      if (elem._id == id) {
        if (!elem.userCount || elem.userCount == 0) {
          elem.userCount = 0
        } else {
          --elem.userCount
        }
        return elem
      }
      return elem
    })
    setUserExercises(newExercises)
  }

  return (
    <View>
      <ItemWorkoutsExercisesActive
        handlerMinus={() => handlerMinus(userExercises[currentExercises]._id)}
        handlerAdd={() => handlerAdd(userExercises[currentExercises]._id)}
        exercise={userExercises[currentExercises]} />

    </View>
  )
}

import { Text, View } from "react-native"
import { WorkoutsExercisesActiveProps } from "./type"
import { ItemWorkoutsExercisesActive } from "../ItemWorkoutsExercisesAactive/ItemWorkoutsExercisesActive"
import { useState } from "react"
import { IExercise } from "@/shared/type/Workouts/IExercise/IExercise"
import { SwitcherExercisesPanel } from "../SwitcherExerecisesPanel/SwitcherExercisesPanel"
import { useEndExercise } from "@/features/firstWorkouts/model/hook/useEndExercise"

export const WorkoutsExercisesActive: React.FC<WorkoutsExercisesActiveProps> = ({ exercises, handler }) => {
  const { endExercise } = useEndExercise()
  const [userExercises, setUserExercises] = useState<IExercise[]>(exercises)
  const [currentExercises, setCurrentExercises] = useState<number>(0)

  const handlerNext = () => {
    if (userExercises.length - 1 == currentExercises) return
    setCurrentExercises(currentExercises + 1)
  }
  const handlerPreviuos = () => {
    if (0 == currentExercises) return
    setCurrentExercises(currentExercises - 1)
  }

  const handlerChange = async (_id: string) => {
    const res = userExercises.find((element) => element._id == _id);
    if (!res) return
    await endExercise(res)
  }





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
        handlerEnd={() => handlerChange(userExercises[currentExercises]._id)}
        handlerNext={handlerNext}
        handlerPrevious={handlerPreviuos}
        exercise={userExercises[currentExercises]} />
    </View>
  )
}

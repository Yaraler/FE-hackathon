import { StyleSheet, Text, View } from "react-native"
import { ItemWorkoutsExercisesActiveProps } from "./type"
import { CountButtom } from "../../CountButton/CountButtonm"
import { Image } from "react-native"
import { vw } from "react-native-css-vh-vw"
import { SwitcherExercisesPanel } from "../SwitcherExerecisesPanel/SwitcherExercisesPanel"
import { ItemButton } from "../../ItemButton/ItemButton"
import { ExercisesCardActive } from "../ExercisesCardActive/ExercisesCardActive"
import { ExercisesCardNoActive } from "../ExercisesCardNotActive/ExercisesCardNoActive"

export const ItemWorkoutsExercisesActive: React.FC<ItemWorkoutsExercisesActiveProps> = ({ exercise, handlerAdd, handlerMinus, handlerEnd, handlerPrevious, handlerNext, close }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        {!exercise.state ?

          !close ?
            <ExercisesCardActive exercise={exercise}
              handlerAdd={handlerAdd}
              handlerMinus={handlerMinus}
              handlerEnd={handlerEnd}
            /> : <ExercisesCardNoActive exercise={exercise} />
          :
          <ExercisesCardNoActive exercise={exercise} />
        }

        <SwitcherExercisesPanel
          handlerNext={handlerNext}
          handlerPrevious={handlerPrevious}
        />

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  body: {
    width: vw(100),
    display: "flex",
    alignItems: "center",
    justifyContent: "center"

  },
  container: {
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 20,
    width: "90%",
    height: "auto",
    overflow: 'hidden',
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10
  },
  img: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: 270,
    width: undefined,
    aspectRatio: 1
  },
  text: {
    padding: 10,
    textAlign: "center",
    fontSize: 20
  }
})

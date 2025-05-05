import { StyleSheet, Text, View } from "react-native"
import { ItemWorkoutsExercisesActiveProps } from "./type"
import { CountButtom } from "../../CountButton/CountButtonm"
import { Image } from "react-native"
import { vw } from "react-native-css-vh-vw"
import { SwitcherExercisesPanel } from "../SwitcherExerecisesPanel/SwitcherExercisesPanel"
import { ItemButton } from "../../ItemButton/ItemButton"

export const ItemWorkoutsExercisesActive: React.FC<ItemWorkoutsExercisesActiveProps> = ({ exercise, handlerAdd, handlerMinus, }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://static.gym-training.com/upload/image/original/d3/b2/d3b2a70a0236b2d943461c4226f2e428.jpeg?d3e5d07b3c316c950acb9a1cbd427eda',
          }}
        />
        <Text style={styles.text}>{exercise.name}</Text>
        <CountButtom handlerAdd={handlerAdd} handlerMinus={handlerMinus} count={exercise?.userCount} />
        <ItemButton title="Submit result" handleSubmit={() => { }} />

        <SwitcherExercisesPanel
          handlerNext={() => { }}
          handlerPrevious={() => { }}
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
    width: "80%",
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

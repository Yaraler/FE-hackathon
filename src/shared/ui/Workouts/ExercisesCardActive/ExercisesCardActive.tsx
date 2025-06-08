import { Image, Text } from "react-native"
import { View } from "react-native"
import { CountButtom } from "../../CountButton/CountButtonm"
import { ItemButton } from "../../ItemButton/ItemButton"
import { ExercisesCardActiveProps } from "./type"
import { StyleSheet } from "react-native"

export const ExercisesCardActive: React.FC<ExercisesCardActiveProps> = ({ exercise, handlerAdd, handlerMinus, handlerEnd }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: exercise.imgUrl ? exercise.imgUrl : 'https://static.gym-training.com/upload/image/original/d3/b2/d3b2a70a0236b2d943461c4226f2e428.jpeg?d3e5d07b3c316c950acb9a1cbd427eda',
        }}
      />
      <Text style={styles.text}>{exercise.name}</Text>
      <View style={styles.containerCountButton}>
        <CountButtom handlerAdd={handlerAdd} handlerMinus={handlerMinus} count={exercise?.userCount} />
      </View>

      <ItemButton title="Submit result" handleSubmit={() => {
        handlerEnd()
      }} />


    </View>
  )
}

const styles = StyleSheet.create({
  containerCountButton: {
    marginTop: 10,
    marginBottom: 20
  },
  container: {
    borderRadius: 20,
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
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


import { StyleSheet, Text } from "react-native"
import { View } from "react-native"
import { ExercisesCardActiveProps } from "../ExercisesCardActive/type"
import { ExercisesCardNoActiveProps } from "./type"

export const ExercisesCardNoActive: React.FC<ExercisesCardNoActiveProps> = ({ exercise }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTile}>{exercise.name}</Text>
      <Text style={styles.countText}>Кі́лькість:{exercise.userCount ? exercise.userCount : 7}</Text>
      <Text style={styles.descriptionText}>{exercise.comment ? exercise.comment
        :
        "Дякую за вашу вправну працю! Ваші зусилля значно підвищують наш рівень"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },

  textTile: {
    fontSize: 32,
    fontWeight: "bold"
  },
  countText: {
    marginTop: 5,

    fontSize: 22
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 23
  }
})

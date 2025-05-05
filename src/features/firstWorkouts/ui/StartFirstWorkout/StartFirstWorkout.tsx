import { Text, View } from "react-native"
import { StartFirstWorkoutProps } from "../FirstWorkout/type"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { StyleSheet } from "react-native"
import { Colors } from "@/shared/constants/Colors"

export const StartFirstWorkout: React.FC<StartFirstWorkoutProps> = ({ handlerStart, error }) => {
  return (

    <View style={styles.container}>
      <Text style={styles.text}>Get ready to check your current fitness level.{"/n"} Let's see where you stand!</Text>
      {error}
      <ItemButton title="start" handleSubmit={handlerStart} />

    </View>

  )
}

const styles = StyleSheet.create({






  container: {
    display: "flex",
    justifyContent: "center",
    padding: 30,
    textAlign: "center",
    height: 200,
    backgroundColor: Colors.main,
    borderRadius: 20,
    marginTop: "40%",
    width: "80%",

  },
  text: {
    textAlign: "center",
    marginBottom: 30,
    fontSize: 20,
  }

})

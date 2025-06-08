import { Colors } from "@/shared/constants/Colors";
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { useRouter } from "expo-router";
import { Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native"

export const WorkoutsWidgets = () => {
  const router = useRouter();

  const handlerNavToWorkouts = () => router.navigate("/main/workouts")
  return (
    <View style={styles.coontainer}>
      <Text style={styles.text}>
        Тренування на сьогодні
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlerNavToWorkouts} >
        <Text style={styles.buttonText}>СТАРТ</Text>

      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  coontainer: {
    marginTop: 20,
    width: 330,
    backgroundColor: "white",
    borderRadius: 20,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    textAlign: "center"
  },
  text: {
    marginBottom: 30,
    width: 200,
    fontSize: 32,
    fontWeight: "bold"

  },
  button: {
    height: 58,
    width: 254,
    backgroundColor: Colors.secondary,
    color: Colors.secondaryText,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 29
  },
  buttonText: {
    color: Colors.secondaryText,
    fontWeight: 'bold',
    fontSize: 29
  }

})

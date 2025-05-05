import { Colors } from "@/shared/constants/Colors"
import { StyleSheet, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { vw } from "react-native-css-vh-vw"
import { Ionicons } from '@expo/vector-icons';
import { ItemWorkoutsExercisesActiveProps } from "../ItemWorkoutsExercisesAactive/type";
import { SwitcherExercisesPanelProps } from "./type";
import { Text } from "react-native";
import { Svg, Path } from 'react-native-svg';






export const SwitcherExercisesPanel: React.FC<SwitcherExercisesPanelProps> = ({ handlerNext, handlerPrevious }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlerPrevious}>
        <Text style={styles.buttonText}> {'<'} Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlerNext}>
        <Text style={styles.buttonText}>Next {'>'}</Text>
      </TouchableOpacity>
    </View>

  )
}


const styles = StyleSheet.create({
  body: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 20,
    backgroundColor: Colors.main,
    marginTop: 10
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  }
})

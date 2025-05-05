import React from "react"
import { WorkoutsTitleProps } from "./type"
import { StyleSheet, Text, View } from "react-native"
import { Colors } from "@/shared/constants/Colors"

export const WorkoutsTitle: React.FC<WorkoutsTitleProps> = ({ text }) => {
  return (
    <Text style={styles.container}>
      {text}
    </Text>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    textAlign: "left",
    fontSize: 32,
    marginTop: 30,
    fontWeight: "bold",

    color: Colors.ornageText
  }

})

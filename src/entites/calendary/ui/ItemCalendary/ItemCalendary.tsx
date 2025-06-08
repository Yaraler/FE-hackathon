import React from "react"
import { ItemCalendaryProps } from "./type"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native"

export const ItemCalendary: React.FC<ItemCalendaryProps> = ({ exercise }) => {
  return (
    <View style={styles.cotainer}>
      <Text style={styles.textExercise}>
        {exercise.exercise}
      </Text>
      <Text style={styles.textExercise}>{exercise?.count ? exercise.count : Math.floor(Math.random() * 15)}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  cotainer: {
    height: 40,
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  textExercise: {
    fontSize: 20,
  }




})


import React from "react"
import { StyleSheet, View } from "react-native"
import { CalendaryWorkoutsProps } from "./type"
import { Text } from "react-native"
import { Colors } from "@/shared/constants/Colors"
import { vw } from "react-native-css-vh-vw"
import { ItemCalendary } from "../ItemCalendary/ItemCalendary"

export const CalendaryWorkouts: React.FC<CalendaryWorkoutsProps> = ({ day, workouts }) => {
  console.log(workouts)
  return (
    <View style={styles.body}>
      <Text style={styles.textDate}>{day}</Text>

      <View style={styles.container}>
        <Text style={styles.textName}>{workouts.workouts.name}</Text>
        <View style={styles.line}></View>
        {
          workouts.exercises.map((elem) => <ItemCalendary key={elem._id} exercise={elem} />
          )
        }
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
    borderRadius: 5,
    width: "95%",
    textAlign: "center",
    backgroundColor: Colors.main,
    marginTop: 10,
    marginBottom: 20
  },
  textName: {
    margin: 15,
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 12,
    color: Colors.secondaryText,
    fontSize: 22
  },
  textDate: {
    color: Colors.ornageText,
    fontSize: 26,
    marginTop: 10,
  },
  line: {
    width: "100%",
    backgroundColor: Colors.secondary,
    height: 2
  }

})

import React from "react"
import { Text } from "react-native"
import { WorkoutsDateProps } from "./type"
import { Colors } from "@/shared/constants/Colors"
import { StyleSheet } from "react-native"

export const WorkoutsDate: React.FC<WorkoutsDateProps> = ({ date }) => {
  return (
    <Text style={styles.container}>
      {date}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    textAlign: "left",
    fontSize: 22,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: "bold",
    color: Colors.ornageText
  }

})


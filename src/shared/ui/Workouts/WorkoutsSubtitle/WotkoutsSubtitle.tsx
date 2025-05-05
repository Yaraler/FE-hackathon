import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { vh, vw } from "react-native-css-vh-vw"
import { Colors } from "@/shared/constants/Colors"
import { WorkoutsSubtitleProps } from "./type"
import { TextFontFamily } from "@/shared/constants/Text"

export const WorkoutsSubtitle: React.FC<WorkoutsSubtitleProps> = ({ name, description, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{name}</Text>
      <Text style={styles.textDate}>{date}</Text>
      <Text style={styles.descrption}>{description}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main,
    height: "auto",
    width: vw(90),
    padding: 10,
    marginTop: 20,
    borderRadius: 20,
  },
  textDate: {
    fontSize: 20,
    fontFamily: TextFontFamily.mainFont
  },
  descrption: {
    fontSize: 16
  },
  textTitle: {
    fontSize: 28,
    fontFamily: TextFontFamily.mainFont
  }

})


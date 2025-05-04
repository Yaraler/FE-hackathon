import React from "react"
import { StyleSheet } from "react-native"
import { UserNameProps } from "./type"
import { Text } from "react-native-paper"
import { TextFontFamily } from "@/shared/constants/Text"
import { Colors } from "@/shared/constants/Colors"

export const UserName: React.FC<UserNameProps> = ({ name }) => {
  return (
    <Text style={styles.textName}>
      {name}
    </Text>
  )
}
const styles = StyleSheet.create({
  textName: {
    marginTop: 20,
    fontFamily: TextFontFamily.mainFont,
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 32
  }
})


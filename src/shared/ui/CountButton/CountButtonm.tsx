import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { CountButtomProps } from "./type"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { Colors } from "@/shared/constants/Colors"
import { TextFontFamily } from "@/shared/constants/Text"

export const CountButtom: React.FC<CountButtomProps> = ({ handlerMinus, handlerAdd, count }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.containerButton, { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }]}
        onPress={handlerAdd}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.text}>{count ? count : 0}</Text>
      </View>
      <TouchableOpacity
        style={[styles.containerButton, { borderTopRightRadius: 10, borderBottomRightRadius: 10 }]}
        onPress={handlerMinus}>
        <Text style={styles.text}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontFamily: TextFontFamily.mainFont
  },
  container: {
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    width: 125,
    height: 40,



  },
  containerButton: {
    backgroundColor: Colors.secondary,
    width: 45,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  countContainer: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,

    borderColor: "black",
    width: 35,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

  },

})

import { Colors } from "@/shared/constants/Colors"
import { StyleSheet, Text, View } from "react-native"
import { vw } from "react-native-css-vh-vw"

export const FooterBar = () => {
  return (
    <View style={styles.containter}>
      <Text>foote</Text>

    </View>
  )
}


const styles = StyleSheet.create({
  containter: {
    width: "100%",
    height: 130,
    backgroundColor: "#939393"
  }
})

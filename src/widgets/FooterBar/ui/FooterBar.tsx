import { Colors } from "@/shared/constants/Colors"
import { StyleSheet, Text, View } from "react-native"
import { vw } from "react-native-css-vh-vw"
import { footerBarData } from "./data/FooterBar.data"
import { ItemFooterBar } from "./ItemFooterBar/ItemFooterBar"
import { ItemFooterBarFire } from "./ItemFooterBarFire/ItemFooterBarFire"

export const FooterBar = () => {
  return (
    <View style={styles.background}>
      <View style={styles.containter}>
        {footerBarData.map((elem, index) =>
          !elem.type ?
            <ItemFooterBar key={index} {...elem} />
            :
            <ItemFooterBarFire key={index} {...elem} />
        )}

      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  containter: {
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 102,
    backgroundColor: Colors.secondary
  },
  background: {
    width: "100%",
    height: 103,
    backgroundColor: Colors.background
  }
})

import { StyleSheet, Text, View } from "react-native"
import { UserIcon } from "../UserIcon/UserIcon"
import { useUserStore } from "../../model/store/userStorage"
import { vh, vw } from 'react-native-css-vh-vw';
import { UserName } from "../UserName/UserName"
import { Colors } from "@/shared/constants/Colors";
import { TextFontFamily } from "@/shared/constants/Text";
export const UserMain = () => {
  const { user } = useUserStore()
  if (!user) return <Text>load</Text>
  return (
    <View style={styles.container}>
      <UserIcon icon={user?.icon} />
      <View style={styles.containerText}>
        <UserName name={user.name} />
        <Text style={styles.teamText}>team</Text>
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    width: vw(90),
    alignItems: "flex-start",
    height: 93,
  },
  containerText: {
    marginLeft: 30,
  },
  teamText: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: "medium",
    fontFamily: TextFontFamily.mainFont
  }
})


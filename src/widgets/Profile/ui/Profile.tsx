import { useUserStore } from "@/entites/user/model/store/userStorage"
import { UserIcon } from "@/entites/user/ui/UserIcon/UserIcon"
import { Colors } from "@/shared/constants/Colors"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { useRouter } from "expo-router"
import { Image, StyleSheet, View } from "react-native"
import userImg from "../../../../assets/images/MaleUser.png"
import { Text } from "react-native"

export const Profile = () => {
  const { user } = useUserStore()
  const router = useRouter();
  const handlerLogOut = () => router.navigate("/auth/login")

  return (
    <View style={styles.body}>
      <Image
        style={styles.img}
        source={user?.icon ? { uri: user.icon } : userImg}
      />
      <Text style={styles.nameText}>{user?.name}</Text>
      <Text></Text>
      <View>

      </View>
      <ItemButton title="log out" handleSubmit={handlerLogOut} />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background
  },
  img: {
    borderRadius: 90,
    width: 140,
    height: 140
  },
  nameText: {
    fontSize: 32,
    marginTop: 10,
    color: Colors.text
  },

})

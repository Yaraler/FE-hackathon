import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { ItemFooterBarProps } from "../ItemFooterBar/type"
import { useRouter } from "expo-router";

export const ItemFooterBarFire: React.FC<ItemFooterBarProps> = ({ icon, link }) => {
  const router = useRouter();
  const handlerNav = () => router.navigate(link)

  return (
    <TouchableOpacity onPress={handlerNav} style={styles.emptyContainer}>
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={icon}
        />

      </View>
    </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
  emptyContainer: {
    width: 92,
    height: 102
  },
  container: {
    marginTop: -26,
    borderRadius: 50,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 92,
    height: 92
  },
  icon: {
    height: 66,
    width: 66
  }
})


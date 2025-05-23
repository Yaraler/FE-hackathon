import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"
import { StyleSheet, View } from "react-native"
import { Text } from 'expo-dynamic-fonts';
import { vh, vw } from 'react-native-css-vh-vw';
import { Colors } from "@/shared/constants/Colors";
import { TextFontFamily } from "@/shared/constants/Text";
import { useRouter } from "expo-router";

export const PanelStartFirstWorkout = () => {
  const router = useRouter();
  const handlerWorkout = () => router.navigate("/main/workouts")
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}> Start your first workout
        </Text>
        <Text>
          For start your way to the solider. We need  check your physical ....
        </Text>
        <ItemButton title="Start" handleSubmit={handlerWorkout} />
      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: Colors.main,
    width: vw(90),
    borderRadius: 20,
    display: "flex",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  titleText: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: TextFontFamily.mainFont
  }
})

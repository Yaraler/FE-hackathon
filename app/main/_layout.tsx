import { useGetUser } from "@/entites/user/model/hook/useGetUser";
import { FooterBar } from "@/widgets/FooterBar/ui/FooterBar";
import { Slot } from "expo-router";
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {
  const { data } = useGetUser()

  return (
    <View style={styles.background}>
      <SafeAreaView
        style={{ flex: 1, paddingTop: Platform?.OS === 'android' ? StatusBar.currentHeight : 0 }}
      >
        <Slot />
        <FooterBar />

      </SafeAreaView>
    </View>

  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    width: '100%',

  }
});

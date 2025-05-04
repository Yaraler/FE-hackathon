import { useGetUser } from "@/entites/user/model/hook/useGetUser";
import { FooterBar } from "@/widgets/FooterBar/ui/FooterBar";
import { Slot } from "expo-router";
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { data } = useGetUser()

  return (
    <View style={styles.background}>
      <StatusBar
        translucent
        backgroundColor="#939393"
        barStyle="light-content" />
      <SafeAreaView
        style={{ flex: 1, paddingTop: Platform?.OS === 'android' ? StatusBar.currentHeight : 0, }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            headerStyle: {
            },
            animation: "slide_from_right",
            statusBarTranslucent: true
          }}
        >
          <Stack.Screen name="index" options={{ header: () => null }} />
          <Stack.Screen name="workouts" options={{ headerShown: false }} />
        </Stack>



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
    backgroundColor: "black"
  },
  container: {
    width: '100%',

  }
});

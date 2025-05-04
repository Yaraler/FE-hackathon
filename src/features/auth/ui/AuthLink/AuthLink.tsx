import { useRouter } from "expo-router";
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { loginLinkData, registrationLinkData } from "./data/authLink.data";
import { AuthProps } from "@/shared/type/AuthProps/type";


export const AuthLink: React.FC<AuthProps> = ({ typePage }) => {
  const router = useRouter();
  const theme = useTheme();

  const handlePress = () => {
    const url = typePage == "login" ? registrationLinkData.link : loginLinkData.link
    router.navigate(url)
  };
  return (
    <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, }} onPress={handlePress}>

      <Text style={styles.text}>Already have an account? {" "}

        <Text style={[
          styles.link,
          typePage === 'login' ? styles.login : styles.register
        ]}>
          {typePage === 'login' ? registrationLinkData.text : loginLinkData.text}
        </Text>
      </Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    color:"white",
    fontWeight: '500',
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 16,

  },
  text:{
    color:"white",
  }
});

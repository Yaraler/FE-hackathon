import { AuthProps } from "@/shared/type/AuthProps/type";
import { useRouter } from "expo-router";
import { Text, StyleSheet, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import { loginLinkData, registrationLinkData } from "./data/authLink.data";

export const AuthLink: React.FC<AuthProps> = ({ typePage }) => {
  const router = useRouter();
  const theme = useTheme();

  const handlePress = () => {
    const url = typePage == "login" ? registrationLinkData.link : loginLinkData.link
    router.navigate(url)
  };
  return (
    <Pressable onPress={handlePress}>
      <Text style={[styles.link, { color: theme.colors.primary }]}>
        {typePage == "login" ? registrationLinkData.text : loginLinkData.text}
      </Text>
    </Pressable>

  )
}
const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

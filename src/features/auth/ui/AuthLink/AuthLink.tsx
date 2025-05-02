import { AuthProps } from "@/shared/type/AuthProps/type";
import { useRouter } from "expo-router";
import { Text, StyleSheet, Pressable,View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { loginLinkData, registrationLinkData } from "./data/authLink.data";

export const AuthLink: React.FC<AuthProps> = ({ typePage }) => {
  const router = useRouter();
  const theme = useTheme();

  const handlePress = () => {
    const url = typePage === "login"
        ? registrationLinkData.link
        : loginLinkData.link
    router.navigate(url)
  };


  return (
    <Pressable
        style={styles.container}
        onPress={handlePress}>

      <Text style={styles.text}>
          {typePage === 'login' ? `Forgot password? ` : `Already have an account? `}
      <Text style={[styles.link,
          typePage === 'login'
              ? styles.login
              : styles.register
      ]}>
        {typePage === 'login' ? registrationLinkData.text : loginLinkData.text}
      </Text>
      </Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },

    text:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        color: "white"

    },
  link: {
      color:'white',
    textDecorationLine: 'underline',
    fontWeight: '500',
    textAlign: 'center',
      fontSize: 16,

  },
  register:{

  },
  login:{


  }
});

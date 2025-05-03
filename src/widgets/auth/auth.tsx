import React from "react";
import { AuthForm, AuthLink } from "@/features/auth"
import { AuthTitle } from "@/features/auth/ui/AuthTitle/AuthTitle"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { View, Text, StyleSheet,ImageBackground,} from "react-native"



export const Auth: React.FC<AuthProps> = ({ typePage }) => {

  return (
          <ImageBackground
              source={require("../../../assets/images/registration.png")}
              resizeMode='cover'
              style={styles.back}
          >
        <View style={styles.container}>
          <AuthTitle  text={typePage} />
          <AuthForm  typePage={typePage} />
          <AuthLink typePage={typePage} />
        </View>
          </ImageBackground>
      );
    };

    const styles = StyleSheet.create({
        back:{
            flex: 1,
            width: 412,
            height: 917,
        },
        container: {
            flex: 1,
        }
    })






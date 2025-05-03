import React, { useState } from "react";
import { AuthForm, AuthLink } from "@/features/auth"
import { AuthTitle } from "@/features/auth/ui/AuthTitle/AuthTitle"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { View, Text, StyleSheet,ImageBackground,} from "react-native"



function AuthText(props: { text: string }) {
  return <Text style={styles.subtitle}>{props.text}</Text>;
}

export const Auth: React.FC<AuthProps> = ({ typePage }) => {
  const [stateRegister, setStateRegister] = useState(0)


  return (

          <ImageBackground
              source={require("../../../assets/images/registration.png")}
              resizeMode='cover'
              style={styles.back}
          >
        <View style={styles.container}>
             {!stateRegister && <AuthTitle text={typePage} />}
      <AuthForm typePage={typePage} stateRegister={stateRegister} setStateRegister={setStateRegister} />
      {!stateRegister && <AuthLink typePage={typePage} />}
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






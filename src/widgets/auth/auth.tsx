import React, { useState } from "react";
import { AuthForm, AuthLink } from "@/features/auth"
import { AuthTitle } from "@/features/auth/ui/AuthTitle/AuthTitle"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { View, Text, StyleSheet, ImageBackground, } from "react-native"
import { vh, vw } from "react-native-css-vh-vw";



function AuthText(props: { text: string }) {
  return <Text >{props.text}</Text>;
}

export const Auth: React.FC<AuthProps> = ({ typePage }) => {
  const [stateRegister, setStateRegister] = useState(0)


  return (


    <View style={styles.container}>
      {!stateRegister && <AuthTitle text={typePage} />}
      <AuthForm typePage={typePage} stateRegister={stateRegister} setStateRegister={setStateRegister} />
      {!stateRegister && <AuthLink typePage={typePage} />}
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: vh(100),
  }
})






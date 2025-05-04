import React, { useState } from "react";
import { AuthForm, AuthLink } from "@/features/auth"
import { AuthTitle } from "@/features/auth/ui/AuthTitle/AuthTitle"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { View, Text, StyleSheet, ImageBackground, } from "react-native"



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
  back: {
    flex: 1,
    width: 412,
    height: 917,
  },
  container: {
    flex: 1,
  }
})






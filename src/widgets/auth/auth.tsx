import React, { useState } from "react";
import { AuthForm, AuthLink } from "@/features/auth"
import { AuthTitle } from "@/features/auth/ui/AuthTitle/AuthTitle"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { View, Text, StyleSheet } from "react-native"


function AuthText(props: { text: string }) {
  return <Text style={styles.subtitle}>{props.text}</Text>;
}

export const Auth: React.FC<AuthProps> = ({ typePage }) => {
  const [stateRegister, setStateRegister] = useState(0)


  return (
    <View style={styles.back}>
      {!stateRegister && <AuthTitle text={typePage} />}
      <AuthForm typePage={typePage} stateRegister={stateRegister} setStateRegister={setStateRegister} />
      {!stateRegister && <AuthLink typePage={typePage} />}

    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 32,
    fontWeight: 700,
    paddingLeft: 41,
    marginBottom: 26,


  },
  back: {
    backgroundColor: "rgb(216, 216, 216)",
    height: 917,
  }
})






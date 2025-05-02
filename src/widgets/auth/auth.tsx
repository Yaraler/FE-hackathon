import React from "react";
import { AuthForm, AuthLink } from "@/features/auth"
import { AuthTitle } from "@/features/auth/ui/AuthTitle/AuthTitle"
import { AuthProps } from "@/shared/type/AuthProps/type"
import { View, Text, StyleSheet} from "react-native"




export const Auth: React.FC<AuthProps> = ({ typePage }) => {

  return (
    <View style={styles.back}>
      <AuthTitle  text={typePage} />
      <AuthForm  typePage={typePage} />
      <AuthLink typePage={typePage} />
    </View>
  )
}

const styles = StyleSheet.create({

    back:{
            backgroundColor: "#000",
        height:917,
    }
})






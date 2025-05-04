import { Text, View } from "react-native"
import { UserProfilePersonProps } from "./type"
import React from "react"
import { UserProgressBar } from "../UserProgressBar/UserProgressBar"


export const UserProfilePerson: React.FC<UserProfilePersonProps> = ({ name, age, state }) => {
  return (
    <View>
      <Text>there img </Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
      {state ?
        <Text></Text>
        :
        <UserProgressBar />
      }
    </View>
  )
}

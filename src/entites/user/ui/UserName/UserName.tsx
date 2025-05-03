import React from "react"
import { Text } from "react-native"
import { UserNameProps } from "./type"

export const UserName: React.FC<UserNameProps> = ({ name }) => {
  return (
    <Text>
      {name}
    </Text>
  )
}

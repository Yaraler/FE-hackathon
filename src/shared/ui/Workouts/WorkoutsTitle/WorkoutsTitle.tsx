import React from "react"
import { WorkoutsTitleProps } from "./type"
import { Text, View } from "react-native"

export const WorkoutsTitle: React.FC<WorkoutsTitleProps> = ({ name, description }) => {
  const today = new Date();
  return (
    <View>
      <Text>{today.getDate()}</Text>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  )
}

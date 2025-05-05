import React from "react"
import { ItemBrigadeRequirementProps } from "./type"
import { Text, View } from "react-native"





export const ItemBrigadeRequirement: React.FC<ItemBrigadeRequirementProps> = ({requirement,textStyle}) => {
  return (
    <View>
      <Text style={textStyle}>{requirement.exercise}:</Text>
      <Text style={textStyle}>Норматив - {requirement.minimum}</Text>
      <Text style={textStyle}>Елітний рівень - {requirement.maximum}</Text>
    </View>
  )
}

import React from "react"
import { ItemBrigadeRequirementProps } from "./type"
import { Text, View } from "react-native"

export const ItemBrigadeRequirement: React.FC<ItemBrigadeRequirementProps> = ({ requirement }) => {
  return (
    <View>
      <Text>{requirement.exercise}</Text>
      <Text>
        minimum:{requirement.minimum}
      </Text>
      <Text>
        maximum:{requirement.maximum}
      </Text>
    </View>
  )
}

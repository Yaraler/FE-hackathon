import { Text, View } from "react-native"
import { CardBrigadeProps } from "./type"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"

export const CardBrigade: React.FC<CardBrigadeProps> = ({ brigade, handler }) => {
  return (
    <View>
      <Text>{brigade.name}</Text>
      <ItemButton title="choose" handleSubmit={() => handler(brigade._id)} />
    </View>
  )
}

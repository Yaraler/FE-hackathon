import { Image, Text, View } from "react-native"
import { BrigadeChooseInfoProps } from "./type"
import { BrigadeRequirements } from "../requirement/BrigadeRequirements/BrigadeRequirements"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"

export const BrigadeChooseInfo: React.FC<BrigadeChooseInfoProps> = ({ brigade, handlerSubmit }) => {

  return (
    <View>
      <Image
        source={{
          uri: brigade.image
        }}
        resizeMode="cover"
      />

      <Text>{brigade.name}</Text>

      <Text>{brigade.description}    </Text>
      <BrigadeRequirements requirements={brigade.requirements} />
      <ItemButton
        title="Log in"
        handleSubmit={() => handlerSubmit(brigade._id)}
      />

    </View >
  )
}

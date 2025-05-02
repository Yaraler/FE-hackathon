import { Image, StyleSheet, Text, View } from "react-native"
import { CardBrigadeProps } from "./type"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"

export const CardBrigade: React.FC<CardBrigadeProps> = ({ brigade, handler }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.brigadeImg}
        source={{
          uri: brigade?.image
        }}
        resizeMode="cover"
      />
      <Text>{brigade?.name}</Text>
      <ItemButton title="choose" handleSubmit={() => handler(brigade?._id)} />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 158,
    height: 158
  },
  brigadeImg: {
    width: 145,
    height: 130
  }

})

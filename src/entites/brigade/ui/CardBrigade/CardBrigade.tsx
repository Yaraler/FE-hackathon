import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { CardBrigadeProps } from "./type"

export const CardBrigade: React.FC<CardBrigadeProps> = ({ brigade, handler }) => {
  return (
    <TouchableOpacity onPress={() => handler(brigade._id)} style={styles.card}>
      <Image
        style={styles.brigadeImg}
        source={{
          uri: brigade.image
        }}
        resizeMode="cover"
      />
      <Text>{brigade.name}</Text>
    </TouchableOpacity>
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

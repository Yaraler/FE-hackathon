
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"

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
      <Text style={styles.text}>{brigade.shortName}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 10,

  },
  text: {
    fontSize: 20,
    color: "white"
  },
  brigadeImg: {
    width: 145,
    height: 150,
    resizeMode: "cover"
  }

})

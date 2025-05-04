import { Image, StyleSheet, Text, View,TouchableOpacity} from "react-native"
import { CardBrigadeProps } from "./type"
import { ItemButton } from "@/shared/ui/ItemButton/ItemButton"

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
            <Text>Do it</Text>
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
  brigadeImg: {
    width: 145,
    height: 150,
      resizeMode:"cover"
  }

})

//сама карточка
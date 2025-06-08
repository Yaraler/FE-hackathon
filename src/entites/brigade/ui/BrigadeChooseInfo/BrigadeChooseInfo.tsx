import { Image, Text, View, StyleSheet} from "react-native"
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
            <Text style={styles.text}>{brigade.name}</Text>
            <Text style={styles.description}>{brigade.description} </Text>
      <BrigadeRequirements
          requirements={brigade.requirements}
          containerStyle={styles.container}
          textStyle={styles.require}
      />
        <View style={styles.button}>
      <ItemButton
        title="Start"
        handleSubmit={() => handlerSubmit(brigade._id)}
      />
    </View>

    </View>
  )
}
const styles = StyleSheet.create({

    text:{
        marginTop:80,
        color:"white",
        textAlign:"center",
        fontSize:30,
        marginBottom:20,
    },
    description:{
        textAlign:"center",
        color:"white",
        fontSize:20,
        marginBottom:20,
    },
    button:{
        marginTop: 15,
        marginBottom: -30,
    },
    require:{
        color:"white",
        fontSize:15,
    },
        container: {
            backgroundColor: 'rgba(82,85,87,0.7)',
            borderRadius: 12,
            padding: 16,
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: 'rgba(71,73,73,0.3)',
            shadowColor: '#090909',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5, // для Android
        }
})


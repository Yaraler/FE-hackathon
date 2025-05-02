import { TextInput } from "react-native-paper"
import { InputProps } from "./type"
import { View } from "react-native";
import { StyleSheet } from "react-native";




export const Input: React.FC<InputProps> = ({ typePage, field, placeholder, type = "default" }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput style={[

        styles.input,
        typePage === 'login' ? styles.login : styles.register
      ]}
        keyboardType={type}
                 underlineColor="transparent"
                 selectionColor="transparent"
                 outlineColor="transparent"
                 label={placeholder}
        value={field.value}
        onChangeText={field.onChange}
        theme={{ primary: 'blue', underlineColor: 'transparent', roundness: 110 }}
        {...field}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    width: 330,
    height: 55,
    backgroundColor: 'white',
    color: '',

    paddingHorizontal: 15,
    marginBottom:10,

    borderWidth: 1,
    borderRadius: 110,

  },
  login: {

  },
  register: {

  },
})

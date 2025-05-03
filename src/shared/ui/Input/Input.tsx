import { TextInput } from "react-native-paper"
import { InputProps } from "./type"
import { View,Image } from "react-native";
import { StyleSheet } from "react-native";
import React, {useState} from 'react';

// const eyeIcon = require('../../../assets/images/eye.png');

export const Input: React.FC<InputProps> = ({typePage, field, placeholder, type = "default",secureTextEntry = false,showEyeIcon = false }) => {
  const [isSecure,setIsSecure] = useState(secureTextEntry)
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput style={[
        styles.input,
        typePage === 'login' ? styles.login : styles.register,
          { borderRadius: 5 }
      ]}
                 keyboardType={type}
                 mode="flat"
                 label={placeholder}
                 value={field.value}
                 onChangeText={field.onChange}
                 secureTextEntry={isSecure}

                 theme={{
                     colors: {
                         primary: 'orange',
                         background: 'white',
                         placeholder: 'red',
                         text: 'black',
                     },
                     // roundness: 4
      }}
                 underlineColor="transparent"
                 activeOutlineColor="transparent"
                 right={
                     showEyeIcon && (
                         <TextInput.Icon
                             icon={isSecure ? 'eye-off' : 'eye'}
                             onPress={() => setIsSecure(!isSecure)}
                         />
                     )
                 }
                 {...field}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
      width: 330,
      height: 55,
      backgroundColor:'white',
      paddingHorizontal: 15,
      marginBottom:20,
      borderWidth: 1,
      borderColor:'#eee',
  },
  login: {

  },
  register: {

  },
})

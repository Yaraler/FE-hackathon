import { TextInput } from "react-native-paper"
import { InputProps } from "./type"
import { View,Image } from "react-native";
import { StyleSheet } from "react-native";
import React, {useState} from 'react';

// const eyeIcon = require('../../../assets/images/eye.png');

export const Input: React.FC<InputProps> = ({typePage, field, placeholder, type = "default",secureTextEntry = false,showEyeIcon = false }) => {
  const [isSecure,setIsSecure] = useState(secureTextEntry)
    const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput style={[
        styles.input,
        typePage === 'login' ? styles.login : styles.register,
          {
              borderRadius: 28,
              borderWidth:1,
              borderColor: isFocused ? 'orange' : '#eee',
          }
      ]}
                 keyboardType={type}
                 mode="flat"
                 label={placeholder}
                 value={field.value}
                 onChangeText={field.onChange}
                 secureTextEntry={isSecure}

                 onFocus={() => setIsFocused(true)}
                 onBlush={() => setIsFocused(false)}
                 theme={{
                     colors: {
                         primary: 'transperent',
                         background: 'white',
                         placeholder: isFocused ? 'orange' : 'gray',
                         text: 'black',
                         underlineColor: 'transparent',
                     },
                     roundness: 28
      }}
                 underlineColor="transparent"
                 activeOutlineColor="transparent"
                 right={
                     showEyeIcon && (
                         <TextInput.Icon
                             icon={isSecure ? 'eye-off' : 'eye'}
                             onPress={() => setIsSecure(!isSecure)}
                             color={isFocused ? 'orange' : '#999'}
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
      paddingHorizontal: 24,
      marginBottom:16,
      overwlow:'hidden',
      // borderWidth: 1,
      // borderColor:'#eee',
  },
  login: {

  },
  register: {

  },
})

import { TextInput } from "react-native-paper"
import { InputProps } from "./type"

export const Input: React.FC<InputProps> = ({ field, placeholder, type = "default" }) => {
  return (
    <TextInput
      keyboardType={type}
      label={placeholder}
      mode="outlined"
      style={{
        backgroundColor: 'white',

        width: "66vw",
        height: "55px",
      }}
      theme={{ colors: { primary: 'blue', underlineColor: 'transparent' } }}
      {...field}
    />

  )
}

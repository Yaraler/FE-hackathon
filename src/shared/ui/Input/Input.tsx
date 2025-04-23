import { TextInput } from "react-native"
import { InputProps } from "./type"

export const Input: React.FC<InputProps> = ({ onBlur, onChange, value }) => {
  return (
    <TextInput
      placeholder="Enter your name"
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
    />
  )
}

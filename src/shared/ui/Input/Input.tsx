import { TextInput } from "react-native"
import { InputProps } from "./type"

export const Input: React.FC<InputProps> = ({ field }) => {
  return (
    <TextInput
      placeholder="Enter your name"
      {...field}
    />
  )
}

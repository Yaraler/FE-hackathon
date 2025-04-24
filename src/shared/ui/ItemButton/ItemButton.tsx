import { ButtonProps } from "./type"
import { Button } from 'react-native';


export const ItemButton: React.FC<ButtonProps> = ({ title, handler }) => {
  return (
    <Button
      title={title}
      onPress={() => handler()}
    />
  )
}

import { ButtonProps } from "./type"
import { Button } from 'react-native-paper';
import { StyleSheet } from "react-native"

export const ItemButton: React.FC<ButtonProps> = ({ title, handleSubmit, }) => {
  return (
    <Button
      mode="contained"
      onPress={handleSubmit}
      style={styles.button}
    >
      {title}
    </Button>
  )
}
const styles = StyleSheet.create({
  button: {
    marginTop: -10,
    width: 300,
    marginLeft: 51,
  },
});

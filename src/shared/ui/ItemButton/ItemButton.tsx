import { ButtonProps } from "./type"
import { Button } from 'react-native-paper';
import { StyleSheet } from "react-native"

export const ItemButton: React.FC<ButtonProps> = ({ title, handleSubmit, }) => {
  return (
    <Button
      mode="contained"
      onPress={handleSubmit}
      style={styles.button}
      labelStyle={styles.label}
      theme={{
        colors:{
        onPrimary: 'black',

        }
      }}
    >
      {title}
    </Button>
  )
}
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor:'orange',
    color:'black',
    width: 330,
    alignSelf: 'center',

  },
  label:{
    color:'black',
    fontSize: 16,
    fontWeight: 700,
  }
});

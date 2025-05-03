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
      width: 330,
      height:55,

      marginTop:0,
      alignSelf: 'center',

    backgroundColor:'orange',
    color:'black',

  },
  label:{
      textAlign:'center',
      lineHeight: 30,
      color:'black',
    fontSize: 20,
    fontWeight: 700,
  }
});

import { Title } from 'react-native-paper';
import { AuthTitleProps } from './type';
import { StyleSheet } from 'react-native';

export const AuthTitle: React.FC<AuthTitleProps> = ({ text }) => {
  return (
    <Title style={styles.subtitle}>
      DO IT
    </Title>
  )
}

const styles = StyleSheet.create({

    subtitle: {
      color:'white',
      fontSize: 24,
      fontWeight: 700,
      paddingBottom:265,
      textAlign: 'center',
      paddingTop:52,

    },

})

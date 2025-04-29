import { Title } from 'react-native-paper';
import { AuthTitleProps } from './type';
import { StyleSheet } from 'react-native';

export const AuthTitle: React.FC<AuthTitleProps> = ({ text }) => {
  return (
    <Title style={styles.title}>
      {text == 'login' ? 'brand' : "register"}
    </Title>
  )
}

const styles = StyleSheet.create({
  title:{
    paddingTop:52,
    paddingBottom:140,
    textAlign: 'center',
    color: 'black',
    fontWeight: '700',
    alignItems: 'center',
  }
})

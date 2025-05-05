import { Title } from 'react-native-paper';
import { AuthTitleProps } from './type';
import { StyleSheet } from 'react-native';
import { Colors } from '@/shared/constants/Colors';

export const AuthTitle: React.FC<AuthTitleProps> = ({ text }) => {
  return (
    <Title style={styles.subtitle}>
      DO IT
    </Title>
  )
}

const styles = StyleSheet.create({

  subtitle: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: Colors.text,
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
    position: "absolute",
    top: 22
  },

})

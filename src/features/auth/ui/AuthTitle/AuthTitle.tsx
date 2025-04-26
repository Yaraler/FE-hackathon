import { Title } from 'react-native-paper';
import { AuthTitleProps } from './type';

export const AuthTitle: React.FC<AuthTitleProps> = ({ text }) => {
  return (
    <Title style={{ textAlign: 'center', marginVertical: 16 }}>
      {text}
    </Title>

  )
}

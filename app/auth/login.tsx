import { Login } from '@/pages/auth/login';
import { Auth } from '@/widgets/auth/auth';
import { Image, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Auth typePage='login' />
    </View>
  );
}


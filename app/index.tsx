import { useTokenStore } from '@/processes/tokenStorage/tokenStorage';
import { Redirect, useRouter } from 'expo-router';

export default function HomeScreen() {
  const { refreshToken } = useTokenStore();



  if (refreshToken) {
    return <Redirect href={'/main'} />
  } else {
    return <Redirect href={'/auth/login'} />
  }

}

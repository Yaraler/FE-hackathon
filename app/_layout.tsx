import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { QueryClient } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';
import { FooterBar } from '@/widgets/FooterBar/ui/FooterBar';
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
      },
    },
  });

  const persister = createAsyncStoragePersister({
    storage: AsyncStorage
  })
  return (
    <SafeAreaProvider>

      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        <PaperProvider>
          <Slot />
        </PaperProvider>

      </PersistQueryClientProvider>
    </SafeAreaProvider>

  )
}


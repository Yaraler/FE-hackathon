<<<<<<< HEAD
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
=======
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { QueryClient } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function RootLayout() {
>>>>>>> 7c75921 (feat)
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

<<<<<<< HEAD
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

=======
>>>>>>> 7c75921 (feat)
  if (!loaded) {
    return null;
  }

<<<<<<< HEAD
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
=======
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
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <SafeAreaView >
        <PaperProvider>
          <Slot />
        </PaperProvider>
      </SafeAreaView >

    </PersistQueryClientProvider>
  )
}

>>>>>>> 7c75921 (feat)

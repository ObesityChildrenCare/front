import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="login_child" options={{ headerShown: false }} />
        <Stack.Screen name="login_parent" options={{ headerShown: false }} />
        <Stack.Screen name="signup_name" options={{ headerShown: false }} />
        <Stack.Screen name="signup_phone" options={{ headerShown: false }} />
        <Stack.Screen name="signup_pw" options={{ headerShown: false }} />
        <Stack.Screen name="signup_chname" options={{ headerShown: false }} />
        <Stack.Screen name="signup_agree" options={{ headerShown: false }} />
        <Stack.Screen name="signup_chinfo" options={{ headerShown: false }} />
        <Stack.Screen name="signup_lastcode" options={{ headerShown: false }} />
        <Stack.Screen name="family_main" options={{ headerShown: false }} />
        <Stack.Screen name="family_ranking" options={{ headerShown: false }} />
        <Stack.Screen name="kids_main" options={{ headerShown: false }} />
        <Stack.Screen name="bamboo_bank" options={{ headerShown: false }} />
        <Stack.Screen
          name="signup_price_agree"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="input-food" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

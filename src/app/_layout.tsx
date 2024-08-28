import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const App = () => {

  const handelTrackPlayerLoaded = useCallback (() => {
    SplashScreen.hideAsync();
  }, []);


  useSetupTrackPlayer({
    onLoad: handelTrackPlayerLoaded,
    
  })

  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown:false}}/>
    </Stack>
  );
}

export default App;
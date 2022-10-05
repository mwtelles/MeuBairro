import React from 'react';

import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';
import {AppNav} from './src/navigation/AppNav';


function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./src/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
    'Inter-Black': require('./src/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('./src/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./src/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./src/fonts/Inter-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>

  );
}

export default App;


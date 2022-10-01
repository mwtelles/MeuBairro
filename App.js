import React from 'react';

import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';
import {AppNav} from './src/navigation/AppNav';


function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
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


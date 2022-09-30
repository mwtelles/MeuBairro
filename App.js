import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';


export default function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}


import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';


export default function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack /> 
      {/* <AppStack /> */}
    </NavigationContainer>
  );
}


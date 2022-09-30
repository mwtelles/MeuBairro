import { useEffect, useCallback } from 'react';
import OnboardingScreen from './src/screens/OnBoardingScreen';

import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
      <OnboardingScreen />
  );
}


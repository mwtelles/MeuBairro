import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import OnboardingScreen from './src/screens/OnBoardingScreen';

export default function App() {
  return (
      <OnboardingScreen />
  );
}


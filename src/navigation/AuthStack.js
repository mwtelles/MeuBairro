import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';
import FullReportScreen from '../screens/FullReportScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false }}>
            <Stack.Screen component={OnboardingScreen} name="Onboarding" />
            <Stack.Screen component={LoginScreen} name="Login"  />
            <Stack.Screen component={SignInScreen} name="SignIn" />
        </Stack.Navigator>
    )
}

export default AuthStack
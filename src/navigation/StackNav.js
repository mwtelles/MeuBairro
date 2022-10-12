import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ReportsScreen from '../screens/ReportsScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer>
            <StackNavigator>
                <Stack.Screen component={ReportsScreen} name='Report' />
            </StackNavigator>
        </NavigationContainer>
    )
}

export default StackNav;
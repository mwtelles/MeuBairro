import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false }}>
            <Drawer.Screen component={HomeScreen} name="Home" />
        </Drawer.Navigator>
    )
}

export default AppStack
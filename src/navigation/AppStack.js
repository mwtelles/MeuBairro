import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReportsScreen from '../screens/ReportsScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false }}>
            <Drawer.Screen component={HomeScreen} name="Home" />
            <Drawer.Screen component={ProfileScreen} name="Profile" />
            <Drawer.Screen component={ReportsScreen} name="Reports" />
            <Drawer.Screen component={SettingsScreen} name="Settings" />
        </Drawer.Navigator>
    )
}

export default AppStack
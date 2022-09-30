import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReportsScreen from '../screens/ReportsScreen';
import CustomDrawer from '../components/CustomDrawer';

import { AntDesign } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{
            headerShown: false,
            drawerLabelStyle: {marginLeft: -20, fontFamily: 'Roboto-Medium', fontSize:15},
            drawerActiveBackgroundColor: '#aa18ea',
            drawerInactiveTintColor: '#333',
            drawerActiveTintColor: '#fff',
        }}>
            <Drawer.Screen component={HomeScreen} name="Home" 
            options={{drawerIcon: ({color}) => (
                <AntDesign name="home" size={22} color={color} />
            )
            }}/>
            <Drawer.Screen component={ProfileScreen} name="Profile" 
            options={{drawerIcon: ({color}) => (
                <AntDesign name="user" size={22} color={color} />
            )
            }}/>
            <Drawer.Screen component={ReportsScreen} name="Reports" 
            options={{drawerIcon: ({color}) => (
                <AntDesign name="notification" size={22} color={color} />
            )
            }}/>
            <Drawer.Screen component={SettingsScreen} name="Settings" 
            options={{drawerIcon: ({color}) => (
                <AntDesign name="setting" size={22} color={color} />
            )
            }}/>
        </Drawer.Navigator>
    )
}

export default AppStack
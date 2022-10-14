import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReportsScreen from '../screens/ReportsScreen';
import RankingScreen from '../screens/RankingScreen';
import CustomDrawer from '../components/CustomDrawer';

import { AntDesign } from '@expo/vector-icons'; 
import FullReportScreen from '../screens/FullReportScreen';
import GalleryFullView from '../screens/GalleryFullView';
import SelectPicture from '../screens/SelectPictureScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
        screenOptions={{
            headerShown: false,
            drawerLabelStyle: {marginLeft: -20, fontFamily: 'Roboto-Medium', fontSize:15},
            drawerActiveBackgroundColor: '#53E88B',
            drawerInactiveTintColor: '#333',
            drawerActiveTintColor: '#fff',
        }}>
            <Drawer.Screen component={HomeScreen} name="Inicio" 
            options={{drawerIcon: ({color}) => (
                <AntDesign name="home" size={22} color={color} />
            )
            }}/>
            <Drawer.Screen component={ProfileScreen} name="Perfil" 
            options={{drawerIcon: ({color}) => (
                <AntDesign name="user" size={22} color={color} />
            )
            }}/>
            <Drawer.Screen component={ReportsScreen} name="Relatar Problema" 
            options={{drawerIcon: ({color}) => (
                <AntDesign name="notification" size={22} color={color} />
            )
            }}/>
            <Drawer.Screen component={RankingScreen} name="Ranking" 
            options={{drawerIcon: ({color}) => (
                <AntDesign name="Trophy" size={22} color={color} />
            )
            }}/>
            <Drawer.Screen component={FullReportScreen} name="FullReport" options={{drawerIcon: ({color}) => (
                <AntDesign name="book" size={22} color={color} /> 
                )
            }}/>
            <Drawer.Screen component={GalleryFullView} name="GalleryFullView" options={{drawerIcon: ({color}) => (
                <AntDesign name="picture" size={22} color={color} /> 
                )
            }}/>
            <Drawer.Screen component={SelectPicture} name="SelectPicture" options={{drawerIcon: ({color}) => (
                <AntDesign name="picture" size={22} color={color} /> 
                )
            }}/>
        </Drawer.Navigator>
    )
}

export default AppStack
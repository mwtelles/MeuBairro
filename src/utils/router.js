import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ReportsScreen from '../screens/ReportsScreen';
import FullReportScreen from '../screens/FullReportScreen';
import GalleryFullView from '../screens/GalleryFullView';
import SelectPicture from '../screens/SelectPictureScreen';
import HomeScreen from '../screens/HomeScreen';
import ConfirmReportScreen from '../screens/ConfirmReportScreen';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="Reportar" component={ReportsScreen}/>
        <Stack.Screen name="FullReport" component={FullReportScreen}/>
        <Stack.Screen name="GalleryFullView" component={GalleryFullView}/>
        <Stack.Screen name="SelectPicture" component={SelectPicture}/>
        <Stack.Screen name="ConfirmReport" component={ConfirmReportScreen}/>
    </Stack.Navigator>
  )
}

export default Routes
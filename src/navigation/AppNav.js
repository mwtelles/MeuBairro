import React, { useContext, View } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator } from 'react-native';

function AppNav() {

    const {isLoading, userToken} = useContext(AuthContext);

    if ( isLoading ) {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        );
    }

  return (
    <NavigationContainer>
        { userToken !== null ? <AppStack /> : <AuthStack /> }
      </NavigationContainer>
  );
}

export default AppNav;
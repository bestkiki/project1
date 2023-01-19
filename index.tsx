import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import ChooseUserType from '../screens/ChooseUserType';
import NewUser from '@/screens/NewUser';
import Theme from '../theme';
import ChooseShop from '../screens/ChooseShop';
import MakeShop from '../screens/MakeShop';

const RootStack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer theme={Theme}>
      <StatusBar barStyle={'dark-content'} />
      <RootStack.Navigator
        initialRouteName={'MakeShop'}
        screenOptions={{ headerShown: false, animation: 'slide_from_right', gestureEnabled: true }}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="ChooseUserType" component={ChooseUserType} />
        <RootStack.Screen name="NewUser" component={NewUser} />
        <RootStack.Screen name="ChooseShop" component={ChooseShop} />
        <RootStack.Screen name="MakeShop" component={MakeShop} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

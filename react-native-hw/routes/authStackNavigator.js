import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegistrationScreen, LoginScreen } from '../screens/auth';

const AuthStack = createNativeStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName='Login'>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name='Login'
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name='Registration'
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  )     
}
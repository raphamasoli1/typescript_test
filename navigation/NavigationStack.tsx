import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import CreateAccount from '../screens/CreateAccount';
import CreateAccountUsername from '../screens/CreateAccountUsername';
import TestChat from '../screens/TestChat';


import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function NavigationStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false, animationEnabled: false}}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Create Account" component={CreateAccount}/>
                <Stack.Screen name="Create Account Username" component={CreateAccountUsername}/>
                <Stack.Screen name="Test Chat" component={TestChat}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};


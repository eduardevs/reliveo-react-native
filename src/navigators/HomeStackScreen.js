import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme/palette';
import { useState } from 'react';
import { View, ActivityIndicator, SafeAreaView, Text, StatusBar, Button } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login } from '../screens/Login/Login';
import { Welcome } from '../screens/Welcome/Welcome';

const { secondary } = colors;

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyled: {
                backgroundColor: 'transparent',
            },
            headerTintColor: secondary,
            headerTransparent: true,
            headerTitle: '',
            headerLeftContainerStyle: {
                paddingLeft: 20,
            },
        }}
    >
        <HomeStack.Screen name="Welcome" component={Welcome} />
    </HomeStack.Navigator>
);

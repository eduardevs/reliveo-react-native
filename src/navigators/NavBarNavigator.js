import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function NavBarNavigator({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EditProfile" component="EditProfile"></Stack.Screen>
        </Stack.Navigator>
    );
}

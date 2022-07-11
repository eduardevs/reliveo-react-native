import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function DiffuseurNavigator({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DiffuseurScreen" component="DiffuseurScreen"></Stack.Screen>
        </Stack.Navigator>
    );
}
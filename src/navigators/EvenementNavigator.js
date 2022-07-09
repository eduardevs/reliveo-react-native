import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function EvenementNavigator({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EvenementScreen" component="EvenementScreen"></Stack.Screen>
        </Stack.Navigator>
    );
}
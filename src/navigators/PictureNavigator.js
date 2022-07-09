import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function PictureNavigator({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="IndexPhoto" component="IndexPhoto"></Stack.Screen>
        </Stack.Navigator>
    );
}

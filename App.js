import React, { useState } from 'react';
import { colors } from './src/theme/palette';
import { View, ActivityIndicator, SafeAreaView, Text, StatusBar, Button } from 'react-native';
import { HomeStackScreen } from './src/navigators/HomeStackScreen';
import { useEffect } from 'react';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppNav } from './src/navigators/AppNav';

const { secondary } = colors;

export default function App() {
    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    );
}

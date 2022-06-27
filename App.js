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
    // const initialLoginState = {
    //     isLoading: true,
    //     email: null,
    //     userToken: null,
    // };

    // const loginReducer = (prevState, action) => {
    //     switch (action.type) {
    //         case 'RETRIEVE_TOKEN':
    //             return {
    //                 ...prevState,
    //                 userToken: action.token,
    //                 isLoading: false,
    //             };
    //         case 'LOGIN':
    //             return {
    //                 ...prevState,
    //                 email: action.id,
    //                 userToken: action.token,
    //                 isLoading: false,
    //             };
    //         case 'LOGOUT':
    //             return {
    //                 ...prevState,
    //                 email: null,
    //                 userToken: null,
    //                 isLoading: false,
    //             };
    //         case 'REGISTER':
    //             return {
    //                 ...prevState,
    //                 email: action.id,
    //                 userToken: action.token,
    //                 isLoading: false,
    //             };
    //     }
    // };

    // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    // const authContext = React.useMemo(
    //     () => ({
    //         signIn: async (email, password) => {
    //             let userToken;
    //             userToken = null;
    //             if (email == 'user' && password == 'pass') {
    //                 // userToken = 'qsdf';
    //                 try {
    //                     await AsyncStorage.setItem('userToken', userToken);
    //                 } catch (e) {
    //                     console.log(e);
    //                 }
    //             }
    //             // HERE FETCHHH :
    //             // userName == email
    //             // if (email == 'user' && password == 'pass') {
    //             // }
    //             dispatch({ type: 'LOGIN', id: email, token: userToken });
    //             // setUserToken('qsdf');
    //             // setIsLoading(false);
    //         },
    //         signOut: async () => {
    //             try {
    //                 await AsyncStorage.removeItem('userToken');
    //             } catch (e) {
    //                 console.log(e);
    //             }
    //             dispatch({ type: 'LOGOUT' });
    //         },
    //         signUp: () => {
    //             // setUserToken('qsdf');
    //             // setIsLoading(false);
    //         },
    //     }),
    //     [],
    // );

    // useEffect(() => {
    //     setTimeout(async () => {
    //         // setIsLoading(false);
    //         let userToken;
    //         userToken = null;
    //         // if fetch data, it will log the user
    //         try {
    //             userToken = await AsyncStorage.getItem('userToken');
    //         } catch (e) {
    //             console.log(e);
    //         }

    //         dispatch({ type: 'REGISTER', token: userToken });
    //     }, 1000);
    // }, []);

    // if (loginState.isLoading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" />
    //         </View>
    //     );
    // }

    return (
        <AuthProvider>
            <AppNav />
        </AuthProvider>
    );
}
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import ProfileScreen from "./src/screens/profile/index.js";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// export default function App() {
// 	const Stack = createNativeStackNavigator();
// 	const Tab = createBottomTabNavigator();
// 	const BottomTabScreen = () => {
// 		return(
// 			<Tab.Navigator 
// 			screenOptions={{headerShown: true}}>
// 				<Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
// 			</Tab.Navigator>
// 		)
// 	}
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator screenOptions={{ headerShown: false }}>
// 				<Stack.Screen name="Bottom" component={BottomTabScreen} />
// 			</Stack.Navigator>
// 			{/* <View style={styles.container}>
// 				<ProfileScreen></ProfileScreen>
// 			</View> */}
// 		</NavigationContainer>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#2E2E2E",
// 		// alignItems: 'center',
// 		// justifyContent: 'center',
// 	},
// });

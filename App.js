import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/theme/palette';
import { View, ActivityIndicator, SafeAreaView, Text, StatusBar, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackScreen } from './src/navigators/HomeStackScreen';
import { RootStackScreen } from './src/navigators/RootStackScreen';
import { useEffect } from 'react';
import { AuthContext } from './src/context/context';

const Drawer = createDrawerNavigator();
const { secondary } = colors;

export default function App() {
    const initialLoginState = {
        isLoading: true,
        email: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    email: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    email: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    email: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(
        () => ({
            signIn: (email, password) => {
                let userToken;
                userToken = null;
                // HERE FETCHHH :
                // userName == email
                if (email == 'user' && password == 'pass') {
                    userToken = 'qsdf';
                }
                dispatch({ type: 'LOGIN', id: email, token: userToken });
                // setUserToken('qsdf');
                // setIsLoading(false);
            },
            signOut: () => {
                // setUserToken('qsdf');
                // setIsLoading(false);
                dispatch({ type: 'LOGOUT' });
            },
            signUp: () => {
                // setUserToken('qsdf');
                // setIsLoading(false);
            },
        }),
        [],
    );

    useEffect(() => {
        setTimeout(() => {
            // setIsLoading(false);
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken !== null ? (
                    <Drawer.Navigator
                        initialRouteName="Home"
                        screenOptions={{
                            headerStyled: {
                                backgroundColor: 'transparent',
                            },
                            headerTintColor: secondary,
                            headerTransparent: true,
                            headerTitle: '',
                            headerLeftContainerStyle: {
                                paddingLeft: 100,
                            },
                        }}
                    >
                        <Drawer.Screen name="Home" component={HomeStackScreen} />
                        {/* More screens to navigate in the Drawer Menu :   like, support screen and settings */}
                    </Drawer.Navigator>
                ) : (
                    <RootStackScreen />
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackScreen } from './RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../theme/palette';
import { HomeStackScreen } from './HomeStackScreen';

const { secondary } = colors;

const Drawer = createDrawerNavigator();

export const AppNav = () => {
    const { isLoading, userToken } = useContext(AuthContext);

    // if (isLoading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size={'large'} />
    //         </View>
    //     );
    // }
    return (
        <NavigationContainer>
            {userToken !== null ? (
                //appstack
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
                </Drawer.Navigator>
            ) : (
                <RootStackScreen />
            )}
            {/*
    {/* More screens to navigate in the Drawer Menu :   like, support screen and settings */}
        </NavigationContainer>
    );
};
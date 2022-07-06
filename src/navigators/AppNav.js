import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import { RootStackScreen } from './RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ReliveoNavStack } from './ReliveoNavStack';
import { IndexPlus } from "../screens/MenuPlus/IndexPlus";

const Drawer = createDrawerNavigator();

export const AppNav = () => {
    const { isLoading, userToken, logout } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {userToken !== null ? (
                <Drawer.Navigator
                    initialRouteName="Accueil"
                    screenOptions={{
                        headerStyled: {
                            backgroundColor: 'transparent',
                        },
                        headerTransparent: true,
                        headerTitle: '',
                        headerLeftContainerStyle: {
                            display: 'none',
                        },
                        style: {
                            drawer: { width: 500, shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
                            main: { paddingLeft: 10 },
                        },
                    }}
                    drawerContent={(props) => {
                        return (
                            <Drawer.Screen name="IndexPlus" component={IndexPlus} />
                        );
                    }}
                >
                    <Drawer.Screen name="Accueil" component={ReliveoNavStack} />
                </Drawer.Navigator>
            ) : (
                <RootStackScreen />
            )}

            {/* More screens to navigate in the Drawer Menu :   like, support screen and settings */}
        </NavigationContainer>
    );
};

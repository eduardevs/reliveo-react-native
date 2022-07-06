import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import { RootStackScreen } from './RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ReliveoNavStack } from './ReliveoNavStack';

import { IndexPlus } from "../screens/MenuPlus/IndexPlus";

import { InfoApp } from "../screens/MenuPlus/InfoApp";
import { SettingsUser } from "../screens/MenuPlus/SettingsUser";
import { Contact } from "../screens/MenuPlus/Contact";
import { InfoProject } from "../screens/MenuPlus/InfoProject";

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
                    drawerContent={props => 
                        <IndexPlus {...props}/>
                    }
                >
                    <Drawer.Screen name="Accueil" component={ReliveoNavStack} />
                    <Drawer.Screen name="InfoApp" component={InfoApp} />
                    <Drawer.Screen name="SettingsUser" component={SettingsUser} />
                    <Drawer.Screen name="Contact" component={Contact} />
                    <Drawer.Screen name="InfoProject" component={InfoProject} />
                </Drawer.Navigator>
            ) : (
                <RootStackScreen />
            )}

            {/* More screens to navigate in the Drawer Menu :   like, support screen and settings */}
        </NavigationContainer>
    );
};

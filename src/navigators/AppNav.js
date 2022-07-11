import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import { RootStackScreen } from './RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../theme/palette';
import { AntDesign, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
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
                        headerShown: false,
                        
                        drawerLabelStyle: {
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        },
                        drawerItemStyle: {
                            borderBottomWidth: 1,
                            borderBottomColor: colors.ReliveoBrandLight,
                        },
                        // style: {
                        //     drawer: { width: 500, shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
                        //     main: { paddingLeft: 10 },
                        // },
                        drawerStyle: {
                            width: '100%',
                            backgroundColor: colors.primary,
                        },
                        drawerPosition: 'right',
                        drawerType: 'front',
                        drawerActiveBackgroundColor: 'transparent',
                        backBehavior: 'none',
                    }}
                    drawerContent={props => 
                        <IndexPlus {...props}/>
                    }
                >
                    <Drawer.Screen name="Accueil" component={ReliveoNavStack} 
                    options={{
                        drawerIcon: () => (
                            <AntDesign name="left" size={24} color="white" />
                        ),
                        drawerLabel: 'Plus',
                    }}
                    />
                    <Drawer.Screen name="SettingsUser" component={SettingsUser} 
                    options={{
                        drawerIcon: () => (
                            <Ionicons name="settings-sharp" size={24} color="white" />
                        ),
                        drawerLabel: 'Paramètres de compte',
                    }}
                    />
                    <Drawer.Screen name="InfoProject" component={InfoProject} 
                    options={{
                        drawerIcon: () => (
                            <Feather name="info" size={24} color="white" />
                        ),
                        drawerLabel: 'Informations sur l’application',
                    }}
                    />
                    <Drawer.Screen name="Contact" component={Contact} 
                    options={{
                        drawerIcon: () => (
                            <Feather name="mail" size={24} color="white" />
                        ),
                    }}
                    />
                    <Drawer.Screen name="InfoApp" component={InfoApp} 
                    options={{
                        drawerIcon: () => (
                            <Ionicons name="open-outline" size={24} color="white" />
                        ),
                        drawerLabel: 'Informations projet',
                    }}
                    />
                    
                </Drawer.Navigator>
            ) : (
                <RootStackScreen />
            )}

            {/* More screens to navigate in the Drawer Menu :   like, support screen and settings */}
        </NavigationContainer>
    );
};

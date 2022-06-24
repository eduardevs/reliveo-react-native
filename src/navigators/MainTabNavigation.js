import { Fontisto } from '@expo/vector-icons';
import { Content } from '../screens/Content/Content';
// import { Events } from './Events/Events';
// import { Favorites } from './Favorites/Favorites';
import { Settings } from '../screens/Settings/Settings';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../theme/palette';

// const Tab = createMaterialBottomTabNavigator();

const { secondary } = colors;
const Tab = createMaterialTopTabNavigator();

export const MainTabScreen = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showIcons: true,
            }}
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
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color }) => <Fontisto name="player-settings" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="Content"
                component={Content}
                options={{
                    tabBarIcon: ({ color }) => <Fontisto name="player-settings" color={color} size={26} />,
                }}
            />
        </Tab.Navigator>
    );
};

import { NavigationContainer } from '@react-navigation/native';
import { colors } from './src/theme/palette';
import { View, ActivityIndicator, SafeAreaView, Text, StatusBar, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { HomeStackScreen } from './src/navigators/HomeStackScreen';
// import { SignupStackScreen } from './src/navigators/SignupStackScreen';
// import { MainTabScreen } from './src/navigators/MainTabNavigation';
import { HomeStackScreen } from './src/navigators/HomeStackScreen';

const Drawer = createDrawerNavigator();
const { secondary } = colors;

export default function App() {
    return (
        <NavigationContainer>
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
                {/* <Drawer.Screen name="Sign Up" component={SignupStackScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

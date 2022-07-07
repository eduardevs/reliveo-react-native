import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from '../screens/Profile/profileScreen';
import { BottomNav } from '../containers/bottomNav/bottomNav';
import { Home } from '../containers/index';
import { ProfileContainer } from '../containers/ProfileContainer';

const BottomStack = createBottomTabNavigator();

export const ReliveoNavStack = ({ navigation }) => {
    return (
        <BottomStack.Navigator
            initialRouteName="Explorer"
            tabBarOptions={{
                showIcons: true,
            }}
            screenOptions={{
                headerStyled: {
                    backgroundColor: 'transparent',
                },
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    display: 'none',
                },
                headerBackVisible: false,
            }}
            tabBar={(props) => <BottomNav {...props} />}
        >
            <BottomStack.Screen name="Home" component={Home} />
            <BottomStack.Screen name="Profile" component={ProfileContainer} />
        </BottomStack.Navigator>
    );
};

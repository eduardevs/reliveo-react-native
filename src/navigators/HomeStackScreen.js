import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme/palette';
import { ProfileScreen } from '../screens/Profile/index';

const { secondary } = colors;

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator
        screenOptions={{
            headerStyled: {
                backgroundColor: 'transparent',
            },
            headerTintColor: secondary,
            headerTransparent: true,
            headerTitle: '',
            headerLeftContainerStyle: {
                paddingLeft: 20,
            },
        }}
    >
        {/* <HomeStack.Screen name="Welcome" component={Welcome} /> */}
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
);

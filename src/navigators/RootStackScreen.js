import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme/palette';
import { Signup } from '../screens/Signup/Signup';
// import { Login } from '../screens/Login/Login';
import { ConnexionContainer } from '../containers/ConnexionContainer/index';

const { secondary } = colors;

const RootStack = createNativeStackNavigator();

export const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator
        initialRouteName="Login"
        headerMode="none"
        screenOptions={{
            headerStyled: {
                backgroundColor: 'transparent',
            },
            headerTintColor: secondary,
            headerTransparent: true,
            headerTitle: '',
            headerBackVisible: false,
        }}
    >
        <RootStack.Screen name="Login" component={ConnexionContainer} />
        <RootStack.Screen name="Signup" component={Signup} />
    </RootStack.Navigator>
);

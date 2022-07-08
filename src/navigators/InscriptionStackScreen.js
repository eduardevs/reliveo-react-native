import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme/palette';
import { Signup } from '../screens/Signup/SignupScreen';
import { InscriptionContainer } from '../containers/InscriptionContainer/index';
// import { Login } from '../screens/Login/Login';
import { ProfileSignupScreen } from '../screens/Signup/ProfileSignupScreen';

const { secondary } = colors;

const InscriptionStack = createNativeStackNavigator();

export const InscriptionStackScreen = ({ navigation }) => (
    <InscriptionStack.Navigator
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
        <InscriptionStack.Screen name="Signup" component={InscriptionContainer} />
        <InscriptionStack.Screen name="Profile" component={ProfileSignupScreen} />
    </InscriptionStack.Navigator>
);

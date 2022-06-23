import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme/palette';
import { Signup } from '../screens/Signup/Signup';

const { secondary } = colors;

const DetailStack = createNativeStackNavigator();

export const DetailsStackScreen = ({ navigation }) => (
    <DetailStack.Navigator
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
        <DetailStack.Screen name="Singup" component={Signup} />
    </DetailStack.Navigator>
);

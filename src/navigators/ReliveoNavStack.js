import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNav } from '../containers/bottomNav/bottomNav';
import { EditProfile } from '../screens/EditProfile/editProfile';
import { DiffuseurScreen} from '../screens/Diffuseur/diffuseurProfile';
import { EvenementScreen} from '../screens/Evenement/evenementScreen';
import IndexPhoto from '../containers/camera/photo/indexPhoto'
import { HomeContainer } from '../containers/fileVideo/index';
import { ProfileContainer } from '../containers/ProfileContainer';
import { Home } from '../containers/fileVideo';



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
            <BottomStack.Screen name="Home" component={HomeContainer} />
            <BottomStack.Screen name="Profile" component={ProfileContainer} />
            <BottomStack.Screen name="EditProfile" component={EditProfile} />
            <BottomStack.Screen name="IndexPhoto" component={IndexPhoto} />
            <BottomStack.Screen name="DiffuseurScreen" component={DiffuseurScreen} />
            <BottomStack.Screen name="EvenementScreen" component={EvenementScreen} />
        </BottomStack.Navigator>
    );
};

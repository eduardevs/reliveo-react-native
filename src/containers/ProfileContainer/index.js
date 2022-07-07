import { ProfileScreen } from '../../screens/Profile/profileScreen';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export const ProfileContainer = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);
    const navProps = {
        navigation,
    };

    return (
        <>
            <ProfileScreen {...navProps} />
        </>
    );
};

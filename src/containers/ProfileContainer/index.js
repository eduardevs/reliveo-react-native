import { ProfileScreen } from '../../screens/Profile/profileScreen';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';

export const ProfileContainer = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [followers, setFollowers] = useState();

    useEffect(() => {
        if (userInfo) {
            const data = userInfo;
            if (data) {
                setUsername(data.username);
                setEmail(data.email);
            }
        }
    }, [userInfo]);

    const profileProps = {
        userProps: {
            username,
            email, // -> username
            //followers
        },
        navProps: {
            navigation,
        },
    };

    return <ProfileScreen {...profileProps} />;
};

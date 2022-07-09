import { ProfileScreen } from '../../screens/Profile/profileScreen';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';

export const ProfileContainer = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [followers, setFollowers] = useState();

    useEffect(() => {
        if (userInfo) {
            const { data } = userInfo;
            if (data) {
                const [user] = data;
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [userInfo]);

    const profileProps = {
        userProps: {
            name,
            email, // -> username
            //followers
            navigation,
        },
        navProps: {
            navigation,
        },
    };

    return <ProfileScreen {...profileProps} />;
};

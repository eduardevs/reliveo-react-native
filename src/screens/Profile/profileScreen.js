import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import styles from './styles';
import ProfileNavBar from '../../components/profile/navBar';
import ProfileHeader from '../../components/profile/profileHeader';
import ProfileTabs from '../../components/profile/tabs/index';

import { AuthContext } from '../../context/AuthContext';

export const ProfileScreen = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [followers, setFollowers] = useState();

    useEffect(() => {
        if (userInfo) {
            const { data } = userInfo;
            if (data) {
                const [user] = data;
                console.log(user.name);
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [userInfo]);

    const userProps = {
        name,
        email, // -> username
        //followers
    };

    const navProps = {
        navigation,
    };

    return (
        <View style={styles.container}>
            <ProfileHeader {...userProps} />
            <ProfileNavBar {...navProps} />
            <ProfileTabs />
        </View>
    );
};

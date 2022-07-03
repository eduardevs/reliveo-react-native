import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import styles from './styles';
import ProfileNavBar from '../../components/profile/navBar';
import ProfileHeader from '../../components/profile/profileHeader';
import ProfileTabs from '../../components/profile/tabs/index';
import BottomNav from '../../containers/bottomNav/bottomNav';

import { AuthContext } from '../../context/AuthContext';

export const ProfileScreen = ({ navigation }) => {
    const { logout, userInfo } = useContext(AuthContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        if (userInfo) {
            const { data } = userInfo;
            console.log(data);
            if (data) {
                const [user] = data;
                console.log(user.name);
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [userInfo]);

    return (
        <View style={styles.container}>
            <ProfileNavBar />
            <ProfileHeader name={name} email={email} />
            <ProfileTabs />
            <BottomNav navigation={navigation} />
        </View>
    );
};

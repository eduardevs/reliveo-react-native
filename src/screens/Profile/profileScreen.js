import { View } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import styles from './styles';
import ProfileNavBar from '../../components/profile/navBar';
import ProfileHeader from '../../components/profile/profileHeader';
import ProfileTabs from '../../components/profile/tabs/index';


export const ProfileScreen = ({ userProps, navProps }) => {
    return (
        <View style={styles.container}>
            <ProfileHeader {...userProps} />
            <ProfileNavBar {...navProps} />
            <ProfileTabs {...navProps}/>
        </View>
    );
};

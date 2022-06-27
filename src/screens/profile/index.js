import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import styles from "./styles";
import ProfileNavBar from '../../components/profile/navBar';
import ProfileHeader from '../../components/profile/profileHeader';
import ProfileTabs from '../../components/profile/tabs/index';




export const ProfileScreen = ({ navigation }) => {
	
    return (
        <View style={styles.container}>
            {/* <ProfileNavBar />
			<ProfileHeader /> */}
			<ProfileTabs />
        </View>
    );
};

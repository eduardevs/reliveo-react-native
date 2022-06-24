import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";
import ProfileNavBar from "../../components/profile/navBar";
import ProfileHeader from "../../components/profile/profileHeader";
import ProfileTabs from "../../components/profile/tabs";


export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			
			{/* <ProfileNavBar />
			<ProfileHeader /> */}
			<ProfileTabs />
			
		</View>
	);
}
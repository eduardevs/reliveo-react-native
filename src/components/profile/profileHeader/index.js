import { View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from './styles';

export default function ProfileHeader({ userObject }) {
    const data = [];
    const [user, setUser] = useState(null);
	const currentUser = user;
    useEffect(() => {
        if (currentUser == null) {
            setUser(data);
        }
    });

    console.log(user);
	//case, switch avec des composants différents
    return (
        <View style={styles.container}>
            <Image style={styles.profile} source={require('../../../assets/gigachad.png')} />
            <Text style={styles.nickname}>{user}</Text>
            <Text style={styles.hashtagfollowers}>{user}</Text>
            <Text style={styles.hashtagfollowers}>{user}</Text>
        </View>
    );
}

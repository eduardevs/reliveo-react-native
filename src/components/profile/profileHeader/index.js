import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './styles';

export default function ProfileHeader({ name, email }) {
    return (
        <View style={styles.container}>
            <Image style={styles.profile} source={require('../../../assets/gigachad.png')} />
            <Text style={styles.nickname}>{name || 'GigaDunmer'}</Text>
            <Text style={styles.hashtagfollowers}>{email || '@TribunallSuperior69'}</Text>
            <Text style={styles.hashtagfollowers}>1.5M followers</Text>
        </View>
    );
}

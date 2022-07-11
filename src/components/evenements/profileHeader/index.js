import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from './styles';

export default function EvenementHeader({ name }) {
    const data = [];
    const [user, setUser] = useState(null);
    const currentUser = user;

    useEffect(() => {
        if (currentUser == null) {
            setUser(data);
        }
    });

    const [iscurrentUser] = useState(false);
    const [activeBtn, setActiveBtn] = useState(true);
    const [showMessage, setshowMessage] = useState(false);

    switch (iscurrentUser) {
        case true:
            return (
                <View style={styles.container}>
                    <Image style={styles.profile} source={require('../../../assets/gigachad.png')} />
                    <Text style={styles.nickname}>{name || 'Gigachad'}</Text>

                    <Text style={styles.hashtagfollowers}>{user}</Text>
                </View>
            );
        case false:
            return (
                <View style={styles.container}>
                    <Image style={styles.header} source={require('../../../assets/header.png')} />
                    <View style={{flexDirection:'row', marginBottom: 20, marginTop: 15}}>
                        <Image style={styles.profile} source={require('../../../assets/gigachad.png')} />
                        <View style={{flexDirection:'column', marginLeft:15}}>
                            <Text style={styles.nickname}>{name}Igorr - tour 2022 - Wiesen</Text>
                            <Text style={styles.hashtagfollowers}>720 Synchronisés</Text>
                            <TouchableOpacity style={styles.addUser}>
                                <Text style={styles.textAdd}>Synchroniser</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
    }
    s;
}

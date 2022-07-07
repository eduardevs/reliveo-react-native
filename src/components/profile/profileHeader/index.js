import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import styles from './styles';

export default function ProfileHeader({ ...props }) {
    const data = [];
    const [user, setUser] = useState(null);
    const currentUser = user;

    useEffect(() => {
        if (currentUser == null) {
            setUser(data);
        }
    });

    const [iscurrentUser] = useState(true);
    const [activeBtn, setActiveBtn] = useState(true);
    const [showMessage, setshowMessage] = useState(false);

    switch (iscurrentUser) {
        case true:
            return (
                <View style={styles.container}>
                    <Image style={styles.profile} source={require('../../../assets/gigachad.png')} />
                    <Text style={styles.nickname}>{'Gigachad'}</Text>
                    <Text style={styles.hashtagfollowers}>{`@${'gigachad'}`}</Text>
                    <Text style={styles.hashtagfollowers}>{`${0}`}</Text>
                </View>
            );
        case false:
            return (
                <View style={styles.container}>
                    <Image style={styles.profile} source={require('../../../assets/gigachad.png')} />
                    <Text style={styles.nickname}>{name || 'Autre Gigachad'} tada</Text>
                    <Text style={styles.hashtagfollowers}>{followers || 'more and more followers'}</Text>
                    <Text style={styles.hashtagfollowers}>{user}</Text>
                    <Text style={showMessage ? styles.textaddedUser : styles.textnotaddedUser}>
                        Vous suivez cet utilisateur
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setActiveBtn(!activeBtn);
                            console.log('hello');
                            setshowMessage(!showMessage);
                        }}
                        style={activeBtn ? styles.addUser : styles.addUsertext}
                    >
                        <Text style={styles.textAdd}>Ajouter +</Text>
                    </TouchableOpacity>
                </View>
            );
    }
    //case, switch avec des composants différents
    // return (
    //     <View style={styles.container}>
    //         <Image style={styles.profile} source={require('../../../assets/gigachad.png')} />
    //         <Text style={styles.nickname}>{user}</Text>
    //         <Text style={styles.hashtagfollowers}>{user}</Text>
    //         <Text style={styles.hashtagfollowers}>{user}</Text>
    //     </View>
    // );
}

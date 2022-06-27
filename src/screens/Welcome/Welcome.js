import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../theme/layout';
import { MainTabScreen } from '../../navigators/MainTabNavigation';
import { style } from './style';
import { AuthContext } from '../../context/AuthContext';

const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line } = styles;

const { WelcomeImage, WelcomeContainer } = style;

export const Welcome = ({ navigation }) => {
    const { logout, userInfo } = useContext(AuthContext);
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        console.log('testttt', userInfo);
        console.log('testeso', userInfo.data);
        const { data } = userInfo;
        console.log(data);
        if (data) {
            const [user] = data;
            console.log(user.name);
            setName(user.name);
            setEmail(user.email);
        }
    }, [userInfo]);

    return (
        <>
            <View style={Container}>
                <StatusBar style="dark" />
                <View style={InnerContainer}>
                    <Image style={WelcomeImage} resizeMode="cover" source={require('../../assets/ReliveoAvatar.png')} />
                    <View style={WelcomeContainer}>
                        <Text style={SubTitle}>{name ? name : 'Giga Chad'}</Text>
                        <Text style={SubTitle}>{email ? email : 'gigachad@mail.com'}</Text>
                        <View style={StyledFormArea}>
                            <TouchableOpacity style={StyledButton} onPress={() => {}}>
                                <Text
                                    style={ButtonText}
                                    onPress={() => {
                                        logout();
                                    }}
                                >
                                    Se deconnecter
                                </Text>
                            </TouchableOpacity>
                            <View style={Line}></View>
                        </View>
                    </View>
                </View>
            </View>
            <MainTabScreen />
        </>
    );
};

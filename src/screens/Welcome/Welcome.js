import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../theme/layout';
import { MainTabScreen } from '../../navigators/MainTabNavigation';
import { style } from './style';

const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line } = styles;

const { WelcomeImage, WelcomeContainer } = style;

export const Welcome = ({ navigation }) => {
    // const { name, email } = route.params;
    return (
        <>
            <View style={Container}>
                <StatusBar style="dark" />
                <View style={InnerContainer}>
                    <Image style={WelcomeImage} resizeMode="cover" source={require('../../assets/ReliveoAvatar.png')} />
                    <View style={WelcomeContainer}>
                        <Text style={SubTitle}>{'Giga Chad'}</Text>
                        <Text style={SubTitle}>{'gigachad@mail.com'}</Text>
                        <View style={StyledFormArea}>
                            {/* <TouchableOpacity style={StyledButton} onPress={() => {}}>
                                <Text style={ButtonText} onPress={() => navigation.goBack()}>
                                    Se deconnecter
                                </Text>
                            </TouchableOpacity> */}
                            <View style={Line}></View>
                        </View>
                    </View>
                </View>
            </View>
            <MainTabScreen />
        </>
    );
};

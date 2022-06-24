import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../theme/layout';
import { MainTabScreen } from '../../navigators/MainTabNavigation';
import { style } from './style';
import { AuthContext } from '../../context/AuthContext';

const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line } = styles;

const { WelcomeImage, WelcomeContainer } = style;

export const Welcome = ({ navigation }) => {
    // const { signOut } = React.useContext(AuthContext);
    // const { name, email } = route.params;
    const { logout } = useContext(AuthContext);

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

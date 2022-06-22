import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { styles } from '../../theme/styles/styleEduardo'
import { style } from './style'

const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line, Avatar } = styles

const { WelcomeImage, WelcomeContainer } = style

export const Welcome = ({navigation, route}) => {
    const {name, email} = route.params;
    return (
        <View style={Container}>
            <StatusBar style="dark" />
            <View style={InnerContainer}>
                <Image style={WelcomeImage} resizeMode="cover" source={require('../../assets/favicon.png')} />
                <View style={WelcomeContainer}>

                    <Text style={PageTitle}>Welcome</Text>
                    <Text style={SubTitle}>{name || 'Giga Chad'}</Text>
                    <Text style={SubTitle}>{email || 'gigachad@mail.com'}</Text>
                    <View style={StyledFormArea}>
                        <Image style={Avatar} resizeMode="cover" source={require('../../assets/favicon.png')} />
                        <TouchableOpacity style={StyledButton} onPress={() => { }}>
                            <Text style={ButtonText}>Se deconnecter</Text>
                        </TouchableOpacity>
                        <View style={Line}></View>
                    </View>
                </View>
            </View>
        </View>
    );
}

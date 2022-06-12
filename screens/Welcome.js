import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { styles } from '../Components/styles'

// vector icons
const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line, WelcomeContainer, Avatar, WelcomeImage } = styles



export const Welcome = ({navigation, route}) => {
    const {name, email} = route.params;
    return (
        <View style={Container}>
            <StatusBar style="dark" />
            <View style={InnerContainer}>
                <Image style={WelcomeImage} resizeMode="cover" source={require('../assets/favicon.png')} />
                <View style={WelcomeContainer}>

                    {/* welcome property pass here welcome={true} */}
                    {/* change to black here */}
                    <Text style={PageTitle}>Welcome</Text>
                    <Text style={SubTitle}>{name || 'Olga simpson'}</Text>
                    <Text style={SubTitle}>{email || 'olgasimpson@mail.com'}</Text>


                    <View style={StyledFormArea}>
                        <Image style={Avatar} resizeMode="cover" source={require('../assets/favicon.png')} />
                        <TouchableOpacity style={StyledButton} onPress={() => { }}>
                            <Text style={ButtonText}>Se deconnecter</Text>
                        </TouchableOpacity>
                        <View style={Line}></View>
                        {/* 
                        <TouchableOpacity google={true} style={StyledButton} onPress={handleSubmit}>
                          
                        </TouchableOpacity> */}


                    </View>


                </View>
            </View>
        </View>
    );
}

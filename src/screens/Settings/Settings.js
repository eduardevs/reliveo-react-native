import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../../theme/layout';

const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line } = styles;

export const Settings = ({ navigation }) => {
    // const { name, email } = route.params;
    return (
        <View style={Container}>
            <StatusBar style="dark" />
            <View style={InnerContainer}>
                <Image resizeMode="cover" source={require('../../assets/favicon.png')} />
                <View>
                    <Text>Settings</Text>

                    <View>
                        <TouchableOpacity style={StyledButton} onPress={() => {}}>
                            <Text style={ButtonText} onPress={() => navigation.goBack()}>
                                Test
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

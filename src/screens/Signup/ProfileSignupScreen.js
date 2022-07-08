import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { KeyboardAvoidingWrapper } from '../../utils/helpers/KeyboardAvoidingWrapper';
import { InputText } from '../../components/inputs/InputText/InputText';
import { styles } from '../../theme/layout';
import { colors } from '../../theme/palette';
// import { SafeAreaView } from 'react-native-srafe-area-context'

const {
    Container,
    InnerContainer,
    PageTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
} = styles;

const { secondary } = colors;

export const ProfileSignupScreen = ({
    navigation,
    handleSubmitProfile,
    data,
    setData,
    hidePassword,
    setHidePassword,
    handleSubmit,
    isSubmitting,
    messageType,
    message,
}) => {
    return (
        <KeyboardAvoidingWrapper>
            <View style={Container}>
                <StatusBar style="dark" />
                <View style={InnerContainer}>
                    <Text style={PageTitle}>Personalisez votre profil {data.name}! </Text>

                    <View style={StyledFormArea}>
                        <Text style={{ color: secondary }}>J'ajoute une photo de profil</Text>

                        {/* IndexFile */}

                        <InputText
                            label={'Je choisi un pseudo'}
                            placeholder="Pseudo"
                            onChangeText={(val) => setData({ ...data, username: val })}
                            // onBlur={handleBlur('email')}
                            value={data.username}
                        />

                        <Text type={messageType} style={MsgBox}>
                            {message}
                        </Text>

                        {!isSubmitting && (
                            <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                                <Text style={ButtonText}>Profil terminé</Text>
                            </TouchableOpacity>
                        )}

                        {isSubmitting && (
                            <TouchableOpacity style={StyledButton} disabled={true}>
                                <ActivityIndicator size="large" color={secondary} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

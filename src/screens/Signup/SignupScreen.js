import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { GoogleInscriptionLogo } from '../../components/buttons/GoogleLoginButton/SvgComponents';
import { KeyboardAvoidingWrapper } from '../../utils/helpers/KeyboardAvoidingWrapper';
import { InputText } from '../../components/inputs/InputText/InputText';
import { styles } from '../../theme/layout';
import { colors } from '../../theme/palette';

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

export const SignupScreen = ({
    navigation,
    handleConfirmPasswordChange,
    handlePasswordChange,
    handleEmailChange,
    handleMessage,
    confirmPassword,
    handleTextChange,
    handlePreSubmit,
    message,
    messageType,
    isSubmitting,
    setIsSubmitting,
    hidePassword,
    data,
    setHidePassword,
}) => {
    return (
        <KeyboardAvoidingWrapper>
            <View style={Container}>
                <StatusBar style="dark" />
                <View style={InnerContainer}>
                    <Text style={PageTitle}>Créez un compte aujourd'hui</Text>
                    <View style={StyledFormArea}>
                        <TouchableOpacity onPress={() => {}}>
                            <GoogleInscriptionLogo />
                        </TouchableOpacity>
                        <View style={Line}></View>
                        <InputText
                            label={'Identifiant'}
                            icon="person"
                            placeholder="gigachad"
                            onChangeText={handleTextChange}
                            // onBlur={handleBlur('identifiant')}
                            value={data.name}
                        />
                        <InputText
                            label={'Adresse Mail'}
                            icon="mail"
                            placeholder="gigachad@mail.com"
                            onChangeText={handleEmailChange}
                            // onBlur={handleBlur('email')}
                            value={data.email}
                            keyboardType="email-address"
                        />
                        <InputText
                            label={'Mot de passe'}
                            icon="lock"
                            placeholder="* * * * * * * *"
                            onChangeText={handlePasswordChange}
                            // onBlur={handleBlur('password')}
                            value={data.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <InputText
                            label={'Confirmez mot de passe'}
                            icon="lock"
                            placeholder="* * * * * * * *"
                            onChangeText={handleConfirmPasswordChange}
                            // onBlur={handleBlur('confirmPasswords')}
                            value={confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <Text type={messageType} style={MsgBox}>
                            {message}
                        </Text>
                        {!isSubmitting && (
                            <TouchableOpacity style={StyledButton} onPress={handlePreSubmit}>
                                <Text style={ButtonText}>Je m'inscris</Text>
                            </TouchableOpacity>
                        )}
                        {isSubmitting && (
                            <TouchableOpacity style={StyledButton} disabled={true}>
                                <ActivityIndicator size="large" color={secondary} />
                            </TouchableOpacity>
                        )}
                        <View style={ExtraView}>
                            <Text style={ExtraText}>J'ai déja un compte</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={TextLink}>Se connecter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

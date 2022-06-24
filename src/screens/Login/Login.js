import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GoogleSigninLogo } from '../../components/buttons/GoogleLoginButton/SvgComponents';

import { KeyboardAvoidingWrapper } from '../../utils/helpers/KeyboardAvoidingWrapper';
import { InputText } from '../../components/inputs/InputText/InputText';
import { styles } from '../../theme/layout';
import { colors } from '../../theme/palette';
import axios from 'axios';
import { AuthContext } from '../../context/context';
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

export const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [isSubmitting, setIsSubmitting] = useState();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const { signIn } = React.useContext(AuthContext);

    const handleLogin = (credentials, setIsSubmitting) => {
        handleMessage(null);
        // URL LOGIN ENDPOINT HERE
        const url = 'https://limitless-cove-87023.herokuapp.com/user/signin'; // EX: API (NODEJS)
        axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data;
                const { message, status, data } = result;

                if (status !== 'SUCCESS') {
                    handleMessage(message, status);
                } else {
                    // signIn();
                    // loginHandle(email, password);
                    // navigation.navigate('Welcome', { ...data[0] });
                    navigation.navigate('Welcome');
                }
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.log(error);
                setIsSubmitting(false);
                handleMessage('An error occurred. Check your network and try again.');
            });
    };

    const handleSubmit = () => {
        console.log(data);
        if (data.email == '' && data.password == '') {
            handleMessage('Please fill all the fields');
            setIsSubmitting(false);
        } else {
            console.log(data);
            handleLogin(data, setIsSubmitting);
        }
    };

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    };

    const loginHandle = (email, password) => {
        signIn(email, password);
    };

    return (
        <KeyboardAvoidingWrapper>
            <View style={Container}>
                <StatusBar style="dark" />
                <View style={InnerContainer}>
                    <Text style={PageTitle}>Bon retour parmis nous !</Text>
                    <View style={StyledFormArea}>
                        <TouchableOpacity onPress={() => {}}>
                            <GoogleSigninLogo />
                        </TouchableOpacity>
                        <View style={Line}></View>

                        <InputText
                            label={''}
                            icon="person"
                            placeholder="Adresse mail"
                            onChangeText={(val) => setData({ ...data, email: val })}
                            // onBlur={handleBlur('email')}
                            value={data.email}
                        />

                        <InputText
                            label={''}
                            icon="lock"
                            placeholder="Mot de passe"
                            onChangeText={(val) => setData({ ...data, password: val })}
                            // onBlur={handleBlur('password')}
                            value={data.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <View style={ExtraView}>
                            <Text style={TextLink}>Mot de passe oublié</Text>
                        </View>

                        <Text type={messageType} style={MsgBox}>
                            {message}
                        </Text>

                        {!isSubmitting && (
                            <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                                <Text style={ButtonText}>Je me connecte</Text>
                            </TouchableOpacity>
                        )}

                        {isSubmitting && (
                            <TouchableOpacity style={StyledButton} disabled={true}>
                                <ActivityIndicator size="large" color={secondary} />
                            </TouchableOpacity>
                        )}

                        <View style={ExtraView}>
                            <Text style={ExtraText}>Je n'ai pas de compte</Text>
                            <Text style={TextLink} onPress={() => navigation.navigate('Signup')}>
                                Sign up
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

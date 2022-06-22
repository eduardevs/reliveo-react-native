import { useState } from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import axios from 'axios';

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

export const Signup = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const dateOfBirth = '01-01-2000';

    const handleSignup = (credentials, setSubmitting) => {
        handleMessage(null);
        // URL SIGNUP ENDPOINT HERE
        const url = 'https://limitless-cove-87023.herokuapp.com/user/signup'; // EX: API (NODEJS)

        axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data;
                const { message, status, data } = result;

                if (status !== 'SUCCESS') {
                    handleMessage(message, status);
                } else {
                    navigation.navigate('Welcome', { ...data });
                }
                setSubmitting(false);
            })
            .catch((error) => {
                console.log(error.JSON());
                setSubmitting(false);
                handleMessage('An error occurred. Check your network and try again.');
            });
    };

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    };

    return (
        <KeyboardAvoidingWrapper>
            <View style={Container}>
                <StatusBar style="dark" />
                <View style={InnerContainer}>
                    <Text style={PageTitle}>Créez un compte aujourd'hui</Text>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            dateOfBirth: dateOfBirth,
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            values = { ...values, dateOfBirth };
                            if (
                                values.email == '' ||
                                values.password == '' ||
                                values.name == '' ||
                                values.confirmPassword == ''
                            ) {
                                handleMessage('Please fill all the fields');
                                setSubmitting(false);
                            } else if (values.password !== values.confirmPassword) {
                                handleMessage('Password do not match');
                                setSubmitting(false);
                            } else {
                                console.log('values', values);
                                handleSignup(values, setSubmitting);
                            }
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                            <View style={StyledFormArea}>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <GoogleInscriptionLogo />
                                </TouchableOpacity>

                                <View style={Line}></View>

                                <InputText
                                    label={'Identifiant'}
                                    icon="person"
                                    placeholder="toto"
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('identifiant')}
                                    value={values.name}
                                />
                                <InputText
                                    label={'Adresse Mail'}
                                    icon="mail"
                                    placeholder="toto@mail.com"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                                <InputText
                                    label={'Mot de passe'}
                                    icon="lock"
                                    placeholder="* * * * * * * *"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <InputText
                                    label={'Confirmez mot de passe'}
                                    icon="lock"
                                    placeholder="* * * * * * * *"
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPasswords')}
                                    value={values.confirmPassword}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />

                                <Text type={messageType} style={MsgBox}>
                                    {message}
                                </Text>
                                {!isSubmitting && (
                                    <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
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
                                    <Text style={TextLink}>Se connecter</Text>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

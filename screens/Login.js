import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { KeyboardAvoidingWrapper } from '../Components/KeyboardAvoidingWrapper'
import { Colors, styles } from '../Components/styles'


// vector icons
const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent } = styles

const { primary, secondary, ternary, darkLight } = Colors

export const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingWrapper>
            <View style={Container}>
                <StatusBar style="dark" />
                <View style={InnerContainer}>
                    <Image resizeMode="cover" source={require('../assets/favicon.png')} />
                    <Text style={PageTitle}>Reliveo</Text>
                    <Text style={SubTitle}>Connexion</Text>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values)
                            navigation.navigate("Welcome")
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) =>
                            <View style={StyledFormArea}>
                                <CustomTextInput label={"Identifiant"}
                                    icon="person"
                                    placeholder="toto"
                                    // placeholderTextColor={darkLigh}
                                    onChangeText={handleChange('identifiant')}
                                    onBlur={handleBlur('identifiant')}
                                    value={values.identifiant}
                                />

                                <CustomTextInput label={"Mot de passe"}
                                    icon="lock"
                                    placeholder="* * * * * * * *"
                                    // placeholderTextColor={darkLigh}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <Text style={MsgBox} >...</Text>
                                <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                                    <Text style={ButtonText}>Se connecter</Text>
                                </TouchableOpacity>
                                <View style={Line}></View>
                                {/* add here style for google with styled component 
                            in StyledButton
                    
                            */}
                                <TouchableOpacity google={true} style={StyledButton} onPress={handleSubmit}>
                                    <Fontisto name="google" color={ternary} size={25} />
                                    <Text google={true} style={ButtonText}>Se connecter avec google</Text>
                                </TouchableOpacity>
                                <View style={ExtraView}>
                                    <Text style={ExtraText}>Don't have an account already ?</Text>
                                    <Text style={TextLink} onPress={() => navigation.navigate("Signup")
                                    }>Sign up</Text>
                                </View>

                            </View>
                        }

                    </Formik>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    );
}

const CustomTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <View style={LeftIcon}>
                <Octicons name={icon} size={30} color={secondary} />
            </View>
            <Text style={StyledInputLabel}>{label}</Text>
            <TextInput style={StyledTextInput} {...props} />
            {isPassword && (
                <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </TouchableOpacity>
            )}

            {/* <TouchableOpacity style={StyledButton}>Button</TouchableOpacity> */}
        </View>
    )
}

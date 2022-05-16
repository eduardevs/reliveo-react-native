import { Ionicons, Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { KeyboardAvoidingWrapper } from '../../Components/KeyboardAvoidingWrapper'
import { Colors, styles } from '../../Components/styles'

// vector icons
const { Avatar, Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent, GoogleBtn, ButtonTextGoogle } = styles

//keyboard voiding view
const { primary, secondary, ternary, darkLight } = Colors

export const ProfileSignup = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingWrapper>
            <View style={Container}>
                <StatusBar style="dark" />
                <View style={InnerContainer}>

                    <Text style={PageTitle}>Personnalizes votre profil</Text>
                    {/* <Text style={SubTitle}>Inscription</Text> */}

                    <Formik
                        initialValues={{ email: '', password: '', confirmPassword: '' }}
                        onSubmit={(values) => {
                            console.log(values)
                            navigation.navigate("Welcome")

                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) =>
                            <View style={StyledFormArea}>
                                <Image style={Avatar} resizeMode="cover" source={require('../../assets/favicon.png')} />

                                <CustomTextInput label={"Je choisis un pseudo"}
                                    icon="person"
                                    placeholder="toto"
                                    // placeholderTextColor={darkLigh}
                                    onChangeText={handleChange('identifiant')}
                                    onBlur={handleBlur('identifiant')}
                                    value={values.identifiant}
                                />


                                <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                                    <Text style={ButtonText}>Profil terminé</Text>
                                </TouchableOpacity>


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


import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import { GoogleSigninLogo } from '../../lib/components/SvgComponents'

import { KeyboardAvoidingWrapper } from '../../Components/KeyboardAvoidingWrapper'
import { Colors, styles } from '../../Components/styles'
import axios from 'axios'

// vector icons
const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent } = styles

const { primary, secondary, ternary, darkLight } = Colors

export const Login = ({ navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState()
  const [messageType, setMessageType]= useState();

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://limitless-cove-87023.herokuapp.com/user/signin'
    axios
      .post(url, credentials)
      .then((response)=> {
        const result = response.data;
        const {message, status, data} = result;

        if( status !== 'SUCCESS') {
          handleMessage(message, status)
        } else {
          navigation.navigate('Welcome', {...data[0]});
        }
        setSubmitting(false)
      })
      .catch(error => {

        console.log(error.JSON())
        setSubmitting(false);
        handleMessage("An error occurred. Check your network and try again.")
    })
  }

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  } 

  return (
    <KeyboardAvoidingWrapper>
      <View style={Container}>
        <StatusBar style="dark" />
        <View style={InnerContainer}>
          <Text style={PageTitle}>Bon retour parmis nous !</Text>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, {setSubmitting}) => {
              if(values.email == '' && values.password == '') {
                handleMessage('Please fill all the fields');
                setSubmitting(false)
              } else {
                console.log(values)
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) =>

              <View style={StyledFormArea}>
                <TouchableOpacity onPress={handleSubmit}>
                  <GoogleSigninLogo />
                </TouchableOpacity>
                <View style={Line}></View>

                <CustomTextInput label={""}
                  icon="person"
                  placeholder="Adresse mail"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.identifiant}
                />

                <CustomTextInput label={""}
                  icon="lock"
                  placeholder="Mot de passe"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <View style={ExtraView}>
                  <Text style={TextLink} >Mot de passe oublié</Text>
                </View>
                  
                  <Text type={messageType} style={MsgBox} >{message}</Text>

                {!isSubmitting &&
                <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                  <Text style={ButtonText}>Je me connecte</Text>
                </TouchableOpacity>
                }

                {isSubmitting &&
                <TouchableOpacity style={StyledButton} disabled={true}>
                  <ActivityIndicator size="large" color={ternary} />
                </TouchableOpacity>
                }
             
                <View style={ExtraView}>
                  <Text style={ExtraText}>Je n'ai pas de compte</Text>
                  <Text style={TextLink} onPress={() => navigation.navigate("Signup")}>
                    Sign up</Text>
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



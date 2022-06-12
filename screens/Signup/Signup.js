import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { GoogleInscriptionLogo } from '../../lib/components/SvgComponents'

import { KeyboardAvoidingWrapper } from '../../Components/KeyboardAvoidingWrapper'
import { Colors, styles } from '../../Components/styles'
import Svg, { Rect, Path } from "react-native-svg"
import axios from 'axios'



const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent, GoogleBtn, ButtonTextGoogle } = styles

const { primary, secondary, ternary, darkLight } = Colors

export const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState()
  const [messageType, setMessageType]= useState();
  const dateOfBirth = '01-01-2000'

  const handleSignup = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://limitless-cove-87023.herokuapp.com/user/signup'
    axios
      .post(url, credentials)
      .then((response)=> {
        const result = response.data;
        const {message, status, data} = result;

        if( status !== 'SUCCESS') {
          handleMessage(message, status)
        } else {
          navigation.navigate('Welcome', {...data});
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

          <Text style={PageTitle}>Créez un compte aujourd'hui</Text>

          <Formik
            initialValues={{name:'' , email: '', password: '', confirmPassword: '', dateOfBirth:dateOfBirth }}
            onSubmit={(values, {setSubmitting}) => {
              values = {...values, dateOfBirth}
              if(values.email == '' || values.password == '' || values.name == '' || values.confirmPassword == '') {
                handleMessage('Please fill all the fields');
                setSubmitting(false)
              } else if(values.password !== values.confirmPassword) {
                handleMessage('Password do not match');
                setSubmitting(false)
              } else {
                console.log('values', values)
                handleSignup(values, setSubmitting);
              }      
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) =>
              <View style={StyledFormArea}>

                <TouchableOpacity onPress={handleSubmit}>
                  <GoogleInscriptionLogo />

                </TouchableOpacity>

                <View style={Line}></View>
                {/* add here style for google with styled component 
                            in StyledButton
                            
                        */}
                <CustomTextInput label={"Identifiant"}
                  icon="person"
                  placeholder="toto"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('identifiant')}
                  value={values.name}
                />
                <CustomTextInput label={"Adresse Mail"}
                  icon="mail"
                  placeholder="toto@mail.com"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
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
                <CustomTextInput label={"Confirmez mot de passe"}
                  icon="lock"
                  placeholder="* * * * * * * *"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPasswords')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <Text type={messageType} style={MsgBox} >{message}</Text>
               {!isSubmitting &&
                <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                  <Text style={ButtonText}>Je m'inscris</Text>
                </TouchableOpacity>
                }

                {isSubmitting &&
                <TouchableOpacity style={StyledButton} disabled={true}>
                  <ActivityIndicator size="large" color={ternary} />
                </TouchableOpacity>
                }
              
                <View style={ExtraView}>
                  <Text style={ExtraText}>J'ai déja un compte</Text>
                  <Text style={TextLink}>Se connecter</Text>
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


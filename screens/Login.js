import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GoogleSigninLogo } from '../lib/components/SvgComponents'

import { KeyboardAvoidingWrapper } from '../Components/KeyboardAvoidingWrapper'
import { Colors, styles } from '../Components/styles'
import axios from 'axios'

// vector icons
const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent } = styles

const { primary, secondary, ternary, darkLight } = Colors

export const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState()
  const [messageType, setMessageType]= useState();

  const handleLogin = (credentials) => {
    const url = 'https://limitless-cove-87023.herokuapp.com/user/signin'

    axios
      .post(url, credentials)
      .then((response)=> {
        const result = response.data;
        const {message, status, data} = result;


      })
      .catch(error => {
        console.log(error.JSON())
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
            onSubmit={(values) => {
              console.log(values)
              navigation.navigate("Welcome")
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) =>
              <View style={StyledFormArea}>
                <TouchableOpacity onPress={handleSubmit}>
                  <GoogleSigninLogo />
                </TouchableOpacity>
                <View style={Line}></View>

                <CustomTextInput label={""}
                  icon="person"
                  placeholder="Adresse mail"
                  // placeholderTextColor={darkLigh}
                  onChangeText={handleChange('identifiant')}
                  onBlur={handleBlur('identifiant')}
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

                  <Text type={messageType} style={MsgBox} >{message}</Text>
                  <Text style={TextLink} >Mot de passe oublié</Text>
                </View>

                <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                  <Text style={ButtonText}>Je me connecte</Text>

                </TouchableOpacity>
                {/* add here style for google with styled component 
                            in StyledButton
                    
                            */}


                <TouchableOpacity google={true} style={StyledButton} onPress={handleSubmit}>
                  <Text google={true} style={ButtonText}>Se connecter avec google</Text>
                </TouchableOpacity>
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



import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import { GoogleSigninLogo } from '../../components/atoms/buttons/GoogleLoginButton/SvgComponents'
// import { GoogleInscriptionLogo } from '../components/atoms/buttons/GoogleLoginButton/SvgComponents'

import { KeyboardAvoidingWrapper } from '../../components/lib/helpers/KeyboardAvoidingWrapper'
import { InputText } from '../../components/atoms/inputs/InputText/InputText'
import { Colors, styles } from '../../styles/styleEduardo'
import axios from "axios"

const { Container, InnerContainer, PageTitle, StyledFormArea, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink } = styles

const { primary, secondary, ternary, darkLight } = Colors

export const Login = ({ navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState()
  const [messageType, setMessageType]= useState();

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    // URL LOGIN ENDPOINT HERE
    const url = 'https://limitless-cove-87023.herokuapp.com/user/signin' // EX: API (NODEJS)
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

                <InputText label={""}
                  icon="person"
                  placeholder="Adresse mail"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.identifiant}
                />

                <InputText label={""}
                  icon="lock"
                  placeholder="Mot de passe"
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




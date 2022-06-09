import { Fontisto, Ionicons, Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GoogleInscriptionLogo } from '../../lib/components/SvgComponents'

import { KeyboardAvoidingWrapper } from '../../Components/KeyboardAvoidingWrapper'
import { Colors, styles } from '../../Components/styles'
import Svg, { Rect, Path } from "react-native-svg"



const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent, GoogleBtn, ButtonTextGoogle } = styles

//keyboard voiding view
const { primary, secondary, ternary, darkLight } = Colors

export const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>

      <View style={Container}>
        <StatusBar style="dark" />
        <View style={InnerContainer}>

          <Text style={PageTitle}>Créez un compte aujourd'hui</Text>

          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values)
              navigation.navigate("ProfileSignup")
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) =>
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
                  onChangeText={handleChange('identifiant')}
                  onBlur={handleBlur('identifiant')}
                  value={values.identifiant}
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
                <Text style={MsgBox} >...</Text>
                <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                  <Text style={ButtonText}>Je m'inscris</Text>
                </TouchableOpacity>
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


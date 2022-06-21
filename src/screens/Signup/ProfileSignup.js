import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'

import { KeyboardAvoidingWrapper } from '../../utils/helpers/KeyboardAvoidingWrapper'
import { InputText } from '../../components/inputs/InputText/InputText'
// update import
import { styles } from '../../theme/styles/styleEduardo'
import { Colors } from '../../theme/palette'


const { Avatar, Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent, GoogleBtn, ButtonTextGoogle } = styles

const { primary, ReliveoBrand, secondary, ReliveoBrandLight } = Colors

export const ProfileSignup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>
      <View style={Container}>
        <StatusBar style="dark" />
        <View style={InnerContainer}>

          <Text style={PageTitle}>Personnalizes votre profil</Text>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values)
              navigation.navigate("ProfileMusic")
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) =>
              <View style={StyledFormArea}>
                <Image style={Avatar} resizeMode="cover" source={require('../../assets/favicon.png')} />

                <InputText label={"Je choisis un pseudo"}
                  icon="person"
                  placeholder="toto"
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

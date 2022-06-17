
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import { Text, TouchableOpacity, View } from 'react-native'

import { KeyboardAvoidingWrapper } from '../../utils/helpers/KeyboardAvoidingWrapper'
// update import
import { Colors, styles } from '../../theme/styles/styleEduardo'

const { Avatar, Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledTextInput, LeftIcon, RightIcon, StyledInputLabel, StyledButton, ButtonText, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent, GoogleBtn, ButtonTextGoogle } = styles

const { primary, secondary, ternary, darkLight } = Colors

export const ProfileMusic = ({ navigation }) => {

  return (
    <KeyboardAvoidingWrapper>
      <View style={Container}>
        <StatusBar style="dark" />
        <View style={InnerContainer}>

          <Text style={PageTitle}>Plus qu'une étape !</Text>

          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values)
              navigation.navigate("Welcome")

            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) =>
              <View style={StyledFormArea}>

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

import { useContext, useState } from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoogleInscriptionLogo } from '../../components/buttons/GoogleLoginButton/SvgComponents';
import { KeyboardAvoidingWrapper } from '../../utils/helpers/KeyboardAvoidingWrapper';
import { InputText } from '../../components/inputs/InputText/InputText';
import { styles } from '../../theme/layout';
import { colors } from '../../theme/palette';
import { AuthContext } from '../../context/AuthContext';

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
    const [isSubmitting, setIsSubmitting] = useState();

    const [confirmPassword, setConfirmPassword] = useState();
    // Que pour l'api de test

    const { signup } = useContext(AuthContext);

    // RELIVEO API
    // const [data, setData] = useState({
    //     email: '',
    //     username: '',
    //     password: '',
    //     photo: 'test',
    //     streamPassword: 'key',
    //     roles: ['utilisateur'],
    // });
    // TEST API
    const [data, setData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        //test purpose
        dateOfBirth: '01-01-2000',
    });

    const handleTextChange = (val) => {
        setData({
            ...data,
            // RELIVEO API
            // username: val,
            // TEST API
            name: val,
        });
    };

    const handleEmailChange = (val) => {
        setData({
            ...data,
            email: val,
        });
    };

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    };

    const handleConfirmPasswordChange = (val) => {
        // setConfirmPassword(val); // TEST API
        setData({
            ...data,
            confirmPassword: val,
        });
    };

    const handleSubmit = () => {
        if (data.username == '' || data.email == '' || data.password == '' || data.confirmPassword == '') {
            handleMessage('Please fill all the fields');
            setIsSubmitting(false);
        } else if (data.password !== data.confirmPassword) {
            handleMessage('Password do not match');
            setIsSubmitting(false);
        } else {
            // console.log('values', data);
            // handleSignup(data, setIsSubmitting);
            signup(data);
            // navigation.navigate('Login');
        }
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
                    <View style={StyledFormArea}>
                        <TouchableOpacity onPress={() => {}}>
                            <GoogleInscriptionLogo />
                        </TouchableOpacity>
                        <View style={Line}></View>
                        <InputText
                            label={'Identifiant'}
                            icon="person"
                            placeholder="toto"
                            onChangeText={(val) => handleTextChange(val)}
                            // onBlur={handleBlur('identifiant')}
                            value={data.username}
                        />
                        <InputText
                            label={'Adresse Mail'}
                            icon="mail"
                            placeholder="toto@mail.com"
                            onChangeText={(val) => handleEmailChange(val)}
                            // onBlur={handleBlur('email')}
                            value={data.email}
                            keyboardType="email-address"
                        />
                        <InputText
                            label={'Mot de passe'}
                            icon="lock"
                            placeholder="* * * * * * * *"
                            onChangeText={(val) => handlePasswordChange(val)}
                            // onBlur={handleBlur('password')}
                            value={data.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        {/* CONFIRMER MOT DE PASSE */}
                        <InputText
                            label={'Confirmez mot de passe'}
                            icon="lock"
                            placeholder="* * * * * * * *"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                            // onBlur={handleBlur('confirmPasswords')}
                            value={confirmPassword}
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
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={TextLink}>Se connecter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

import { SignupScreen } from '../../screens/Signup/SignupScreen';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import useRegister from '../../utils/hooks/useRegister';
import { ProfileSignupScreen } from '../../screens/Signup/ProfileSignupScreen';

export const InscriptionContainer = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [isSubmitting, setIsSubmitting] = useState();
    const [showProfileCustomization, setShowProfileCustomization] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState();

    const registerHook = useRegister();

    const { signup } = useContext(AuthContext);

    // RELIVEO API
    const [data, setData] = useState({
        email: '',
        username: '',
        photo: 'test',
        roles: ['utilisateur'],
        password: '',
        //pseudo: '' ??
    });

    const handleTextChange = (val) => {
        setData({
            ...data,
            // RELIVEO API
            username: val,
            // TEST API
            // name: val,
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
        setConfirmPassword(val); // TEST API
    };

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    };

    const handlePreSubmit = () => {
        // if (data.name == '' || data.email == '' || data.password == '' || data.confirmPassword == '')
        if (data.name == '' || data.email == '' || data.password == '' || confirmPassword == '') {
            handleMessage('Please fill all the fields');

            setIsSubmitting(false);
        } else if (data.password !== confirmPassword) {
            handleMessage('Password do not match');
            setIsSubmitting(false);
        } else {
            // console.log(data);
            setIsSubmitting(true);
            setShowProfileCustomization(true);
        }
    };

    const handleSubmit = () => {
        if (data.username == '') {
            handleMessage('Veuillez choisir un pseudo');
            setIsSubmitting(false);
        } else {
            // FAKE API DOESNT NEED THIS DATA, ONLY DUMMY STUFF
            registerHook(data).then((data) => data && data);
            setIsSubmitting(true);
            navigation.navigate('Login');
        }
    };
    return showProfileCustomization ? (
        <ProfileSignupScreen data={data} setData={setData} message={message} handleSubmit={handleSubmit} />
    ) : (
        <SignupScreen
            navigation={navigation}
            setHidePassword={setHidePassword}
            hidePassword={hidePassword}
            message={message}
            setMessage={setMessage}
            setMessageType={setMessageType}
            messageType={messageType}
            setIsSubmitting={setIsSubmitting}
            isSubmitting={isSubmitting}
            setData={setData}
            data={data}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handlePreSubmit={handlePreSubmit}
            handlePasswordChange={handlePasswordChange}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
            handleEmailChange={handleEmailChange}
            handleTextChange={handleTextChange}
        />
    );
};

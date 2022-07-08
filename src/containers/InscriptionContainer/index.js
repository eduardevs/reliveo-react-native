import { Signup, SignupScreen } from '../../screens/Signup/SignupScreen';
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

    const registerHook = useRegister();

    const [data, setData] = useState({
        email: '',
        username: '',
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

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    };

    const handlePreSubmit = () => {
        if (data.name == '' || data.email == '' || data.password == '' || data.confirmPassword == '') {
            handleMessage('Please fill all the fields');
            setIsSubmitting(false);
        } else if (data.password !== data.confirmPassword) {
            handleMessage('Password do not match');
            setIsSubmitting(false);
        } else {
            // registerHook(data).then((data) => data && console.log(data));
            console.log(data);
            setIsSubmitting(true);
            setShowProfileCustomization(true);
        }
    };

    const handleSubmit = () => {
        if (data.username == '') {
            handleMessage('Veuillez choisir un pseudo');
            setIsSubmitting(false);
        } else {
            delete data.username;
            registerHook(data).then((data) => data && signup(data));
            // console.log(data);
            setIsSubmitting(true);
            navigation.navigate('Login');
        }
    };

    if (showProfileCustomization) {
        return <ProfileSignupScreen data={data} setData={setData} message={message} handleSubmit={handleSubmit} />;
    } else {
        return (
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
    }
};

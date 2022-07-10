import {LoginScreen} from '../../screens/Login/LoginScreen';
import {AuthContext} from '../../context/AuthContext';
import {useContext, useEffect, useState} from 'react';
import useLogin from '../../utils/hooks/useLogin';

export const ConnexionContainer = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [isSubmitting, setIsSubmitting] = useState();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const {login} = useContext(AuthContext);
    

    const loginHook = useLogin();

    const handleSubmit = (data) => {
        if (data.email == '' && data.password == '') {
            handleMessage('Please fill all the fields');
            setIsSubmitting(false);
        } else {
<<<<<<< HEAD
            loginHook(data.email, data.password).then((data) => data && login(data))
                .catch((error) => {
                    console.log(error)
                    setIsSubmitting(false);
                    handleMessage('Mot de passe ou email invalide');
                })

=======
            loginHook(data.email, data.password)
                .then((data) => data && login(data))
                .catch((err) => console.log(err));
>>>>>>> de5d7c6 (    - Add function to compare exp time token)
            setIsSubmitting(true);
        }
    };

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    };

    return (
        <LoginScreen
            navigation={navigation}
            handleSubmit={handleSubmit}
            setHidePassword={setHidePassword}
            hidePassword={hidePassword}
            message={message}
            setMessageType={setMessageType}
            messageType={messageType}
            setIsSubmitting={setIsSubmitting}
            isSubmitting={isSubmitting}
            setData={setData}
            data={data}
        />
    );
};

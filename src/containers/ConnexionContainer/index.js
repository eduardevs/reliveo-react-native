import { LoginScreen } from '../../screens/Login/LoginScreen';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import useLogin from '../../utils/hooks/useLogin';

export const ConnexionContainer = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);

    const { login } = useContext(AuthContext);

    const loginHook = useLogin();

    const handleSubmit = (data) => {
        console.log(data);

        if (data.email == '' && data.password == '') {
            handleMessage('Please fill all the fields');
            // setIsSubmitting(false);
        } else {
            loginHook(data.email, data.password).then((data) => data && login(data));
            // setIsSubmitting(true);
        }
    };

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    };

    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [followers, setFollowers] = useState();

    useEffect(() => {
        // console.log('containeeeeeeer connexion');
        // loginHook()
    }, []);

    // const profileProps = {
    //     userProps: {
    //         name,
    //         email, // -> username
    //         //followers
    //     },
    //     navProps: {
    //         navigation,
    //     },
    // };

    return <LoginScreen handleSubmit={handleSubmit} />;
};

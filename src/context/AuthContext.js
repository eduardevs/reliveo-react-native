import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { BASE_URL } from '../utils/config';
// import axios from '../utils/axios';
// import useAxios from '../utils/hooks/useAxios';
// import { useAxios } from '../utils/hooks/useAxiosFunction';
import useLogin from '../utils/hooks/useLogin';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const loginHook = useLogin();

    // here to only store USER INFO, if Token = true, we call t`
    // `https://reliveoapi.com/api/users?email=${emai}`

    // const [userInfoToken, setUserInfoToken] = useState(null);
    // const [reqRes, setReqRes] = useState(null);

    const login = (data) => {
        setUserInfo(data);
        setUserToken('567777DHF7DH7FD7HF7HD');

        // ? 1 - Si token, faire appel à l'api pour recuperer infoUser
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
    };

    const signup = (data) => {
        axios
            .post('/user/signup', data)
            .then((response) => {
                const result = response.data;
                const { message, status, data } = result;
                console.log(result);

                if (status !== 'SUCCESS') {
                    return message;
                }
            })
            .catch((error) => {
                console.log(error);
                console.log('An error occurred. Check your network and try again.');
            });
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');

            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    const valuesProps = {
        login,
        logout,
        signup,
        isLoading,
        userToken,
        userInfo,
    };

    return <AuthContext.Provider value={valuesProps}>{children}</AuthContext.Provider>;
};

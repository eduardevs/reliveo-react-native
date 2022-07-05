import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL, BASE_URL_TEST_SIGNIN } from '../utils/config';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    // here to only store token
    const [userInfoToken, setUserInfoToken] = useState(null);

    const [userInfo, setUserInfo] = useState(null);
    const [reqRes, setReqRes] = useState(null);

    const login = (email, password) => {
        // http://reliveoapi.com/authentication_token
        setIsLoading(true);
        axios
            .post(`${BASE_URL_TEST_SIGNIN}`, {
                email,
                password,
            })
            .then((res) => {
                // let userInfoToken = res.data;
                let userToken = res.data;

                console.log(res.data);
                userInfo.token = 'qsdfqsdfqs';

                // console.log(userInfo);

                // setUserInfoToken(userInfoToken);
                // console.log('cookie', userInfoToken);
                // console.log(userInfo.token);
                setUserToken(userInfo.token);

                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', userInfo);
            })
            .catch((e) => {
                console.log(`Login error ${e}`);
            });

        // getInfoUser
        // ? 1 - Si token, faire appel à l'api pour recuperer infoUser

        // setUserToken('qsdf');

        // AsyncStorage.setItem('userToken', userToken, {
        //     email,
        //     password,
        // })
        //     .then((res) => {
        //         console.log(res.data);
        // let userInfo = res.data;
        // setUserInfo(userInfo);
        // setUserToken(userInfo.data.token);

        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // AsyncStorage.setItem('userToken', userInfo.data.token);
        // console.log('User token' + userInfo.data.token);

        setIsLoading(false);
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    };

    const signup = (data) => {
        console.log('sign up', data);

        const url = `${BASE_URL}/api/users`;
        // console.log(url);
        axios
            .post(url, data)
            .then((response) => {
                const result = response.data;
                const { message, status, data } = result;
                console.log(result);
                console.log(data);
                if (status !== 'SUCCESS') {
                    // setReqRes(message, status);
                    // ICI TRAVAILLER LE STATE MESSAGE
                    return message;
                }
                // else {
                //     navigation.navigate('Login');
                // }
                // setIsSubmitting(false);
            })
            .catch((error) => {
                console.log(error);
                // setIsSubmitting(false);
                // handleMessage('An error occurred. Check your network and try again.');
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
                // setIsLoading(false);
            }
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ login, logout, signup, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

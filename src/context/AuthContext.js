import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../utils/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (email, password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/user/signin`);
        setUserToken('qsdf');

        AsyncStorage.setItem('userToken', userToken, {
            email,
            password,
        })
            .then((res) => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                setUserToken(userInfo.data.token);

                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', userInfo.data.token);

                console.log(res.data);
                console.log('User token' + userInfo.data.token);
            })
            .catch((e) => {
                console.log(`Login error ${e}`);
            });

        setIsLoading(false);
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    };

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');

            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserToken(userToken);
                setIsLoading(false);
            }
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>{children}</AuthContext.Provider>;
};

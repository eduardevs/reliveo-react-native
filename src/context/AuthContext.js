import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [eventInfo, setEventInfo] = useState(null)
    const [postInfo, setPostInfo] = useState(null)
    // here to only store USER INFO, if Token = true, we call t`
    // `https://reliveoapi.com/api/users?email=${emai}`

    // const [userInfoToken, setUserInfoToken] = useState(null);
    // const [reqRes, setReqRes] = useState(null);
    const event = (data) => {
        setEventInfo(data)
    }
    const post = (data) => {
        setPostInfo(data)
    }
    const login = (data) => {
        // console.log(data.token);
        const decodedJwt = jwt(data.token);
        console.log(decodedJwt)
        setUserInfo(decodedJwt);

        // console.log(userInfo);
        const token = data.token;
        setUserToken(token);

        // set expiration time test
        // const expTime = new Date(data.exp);
        // console.log(expTime);

        // setUserInfo(data);
        // setUserToken('567777DHF7DH7FD7HF7HD');

        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken', userToken);

        // ? 1 - Si token, faire appel à l'api pour recuperer infoUser
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
    };

    const signup = (data) => {
        // ? Peut être, d'aller à la page après avoir fait l'inscription, donc ici je vais devoir faire quelque chose pareil comme pour le login.
        // ? if token true
        //fake token
        setUserToken('567777DHF7DH7FD7HF7HD');
        setUserInfo(data);

        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // AsyncStorage.setItem('userToken', userInfo.token);
    };

    // check if user is logged
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
        eventInfo,
        event,
        postInfo,
        post,
    };

    return <AuthContext.Provider value={valuesProps}>{children}</AuthContext.Provider>;
};

import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-storage';
import jwt from 'jwt-decode';
import storage from './config/Storage';
import { SceneMap } from 'react-native-tab-view';
import checkToken from '../utils/core/checkToken';
import checkExpirationToken from '../utils/core/checkExpirationToken';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [eventInfo, setEventInfo] = useState(null);
    const [postInfo, setPostInfo] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    // here to only store USER INFO, if Token = true, we call t`
    // `https://reliveoapi.com/api/users?email=${emai}`

    // const [userInfoToken, setUserInfoToken] = useState(null);
    // const [reqRes, setReqRes] = useState(null);
    const event = (data) => {
        setEventInfo(data);
    };
    const post = (data) => {
        setPostInfo(data);
    };

    // `https://reliveoapi.com/api/users?email=${emai}`

    const checkExpirationToken = () => {
        storage
            .load({
                key: 'userToken',
                id: '1',
            })
            .then((ret) => {
                console.log('old token ', ret.token);
            })
            .catch((err) => {
                console.log(err.message);

                logout();
            });
    };

    const login = (data) => {
        const decodedJwt = jwt(data.token);
        console.log(decodedJwt);
        setUserInfo(decodedJwt);

        setEmail(data.email);
        setPassword(data.password);

        const token = data.token;

        setUserToken(token);

        storage.save({
            key: 'userToken', // Note: Do not use underscore("_") in key!
            id: '1',
            data: { token: token },

            expires: 1000 * 3600,
        });
    };

    const logout = () => {
        setUserToken(null);
        setUserInfo(null);

        storage.remove({
            key: 'userToken',
        });
    };

    const signup = (data) => {};

    // check if user is logged

    const isLoggedIn = async () => {
        try {
            let userInfoToken;

            storage
                .load({
                    key: 'userToken',
                    id: '1',
                })
                .then((ret) => {
                    // console.log(ret.token);
                    userInfoToken = ret.token;
                })
                .catch((err) => {
                    // console.warn(err.message);
                });

            if (userInfoToken) {
                setUserToken(userToken);
            }
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
        checkExpirationToken();
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

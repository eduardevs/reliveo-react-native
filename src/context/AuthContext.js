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
        // TODO ! ici il faudra decoder le token, après refacto

        // ? Recuperer token, si token, faire une requete pour comparer avec un autre token
        console.log('this works !');
        console.log(userToken);

        storage
            .load({
                key: 'userToken',
                id: '1',
            })
            .then((ret) => {
                console.log('old token ', ret.token);
            })
            .catch((err) => {
                console.warn(err.message);
                // setUserToken(null);
                logout();
            });

        // ? ON A BESOIN DE VERIFIER SI LE TOKEN A EXPIRÉ AVEC UNE AUTRE REQUETE AXIOS ?
        // ? CAR LE STORAGE NOUS PERMET DE VOIR DÉJÀ SI LE TOKEN A EXPIRÉ

        //token

        // new token

        // 10 min en secondes
        // TODO : MAKE TIME COMPARISON OF TOKENS
        // const tenMin = 600;

        // const seconds = new Date().getTime() / 1000;

        // const timeToken = seconds - expirationTokenTime;

        // if (timeToken > tenMin) {
        //     console.log('token is alive');
        //     checkToken(email, password).then((res) => console.log(res));
        // } else {
        //     //- recuperer,
        //     checkToken(email, password).then((res) => console.log(res));

        //     console.log('token expiré');
        // }
    };

    const login = (data) => {
        const decodedJwt = jwt(data.token);
        console.log(decodedJwt);
        setUserInfo(decodedJwt);

        // Save user data to check token
        setEmail(data.email);
        setPassword(data.password);

        // console.log('decoded jwt', decodedJwt);

        const token = data.token;

        setUserToken(token);

        storage.save({
            key: 'userToken', // Note: Do not use underscore("_") in key!
            id: '1',
            data: { token: token },

            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
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

    const signup = (data) => {
        // ? Peut être, d'aller à la page après avoir fait l'inscription, donc ici je vais devoir faire quelque chose pareil comme pour le login.
        // ? if token true
        //fake token
        // setUserToken('567777DHF7DH7FD7HF7HD');
        // setUserInfo(data);
        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // AsyncStorage.setItem('userToken', userInfo.token);
    };

    // check if user is logged

    const isLoggedIn = async () => {
        try {
            // setIsLoading(true);

            // let userInfo = await AsyncStorage.getItem('userInfo');
            // let userToken = await AsyncStorage.getItem('userToken');

            // TODO ! REFACTO
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
                    console.warn(err.message);
                });

            // console.log(userInfoToken);

            // userInfo = JSON.parse(userInfo);

            if (userInfoToken) {
                // console.log(userInfo);
                //
                setUserToken(userToken);
                // setUserInfo(userInfo);
            }
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    };

    useEffect(() => {
        // isLoggedIn();
        console.log('usertoken degage', userToken);
        checkExpirationToken();

        // checkExpirationToken(userInfo);
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

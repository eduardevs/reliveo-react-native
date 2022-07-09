import { View } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import styles from './styles';
import DiffuseurNavBar from '../../components/diffuseur/navBar';
import DiffuseurHeader from '../../components/diffuseur/profileHeader';
import DiffuseurTabs from '../../components/diffuseur/tabs/index';



import { AuthContext } from '../../context/AuthContext';


export const DiffuseurScreen = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        if (userInfo) {
            const { data } = userInfo;
            console.log(data);
            if (data) {
                const [user] = data;
                console.log(user.name);
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [userInfo]);

    return (
        <View style={styles.container}>
            <DiffuseurHeader name={name} email={email} navigation={navigation}/>
            <DiffuseurNavBar navigation={navigation}/>
            <DiffuseurTabs navigation={navigation} />
            
        </View>
    );
};


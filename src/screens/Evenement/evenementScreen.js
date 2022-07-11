import { View } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import styles from './styles';
import EvenementNavBar from '../../components/evenements/navBar';
import EvenementHeader from '../../components/evenements/profileHeader';
import EvenementTabs from '../../components/evenements/tabs/index';



import { AuthContext } from '../../context/AuthContext';


export const EvenementScreen = ({ navigation }) => {
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
            <EvenementHeader name={name} email={email} navigation={navigation}/>
            <EvenementNavBar navigation={navigation}/>
            <EvenementTabs navigation={navigation} />
        </View>
    );
};


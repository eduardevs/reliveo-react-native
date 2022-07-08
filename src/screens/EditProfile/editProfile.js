import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import styles from './styles';
import BottomNav from '../../containers/bottomNav/bottomNav';
import { AuthContext } from '../../context/AuthContext';
import { Entypo } from '@expo/vector-icons';
import ProfileNavBar from '../../components/profile/navBar';
import { InputText } from '../../components/inputs/InputText/InputText';

const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line } = styles;

export const EditProfile = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);
    const [validateEdit, setvalidateEdit] = useState(false);
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
            <ProfileNavBar navigation={navigation}/>
            <View>
                <Text style={{alignSelf:'center', marginTop:50, color:'white'}}>Modifier Profile</Text>
            </View>
            <View style={{marginTop: 40, marginLeft: 35}}>
                <TouchableOpacity>
                    <Image style={styles.profile} source={require('../../assets/gigachad.png')} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 15, marginLeft: 35}}>
                <Text>Modifier le pseudo</Text>
                <InputText placeholder="Nouveau pseudo"/>
            </View>
            <View>
                <Text>Visibilité du contenu</Text>
                <View>
                    <Text>
                        Choississez si toutes vos publications sont publiques ou privées. Si vous réactivez la
                        visibilité du contenu, les posts marqués individuellement comme privés resteront privés
                    </Text>
                    <Text>Switch on/off</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setvalidateEdit(!validateEdit);
                    navigation.navigate('Profile');
                }}
                style={styles.btnedit}
            >
                <Text style={styles.btnedittext}>Valider</Text>
            </TouchableOpacity>
        </View>
    );
};

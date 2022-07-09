import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import styles from './styles';
import BottomNav from '../../containers/bottomNav/bottomNav';
import { AuthContext } from '../../context/AuthContext';
import { Entypo } from '@expo/vector-icons';
import ProfileNavBar from '../../components/profile/navBar';
import { InputText } from '../../components/inputs/InputText/InputText';
import { Feather } from '@expo/vector-icons';

const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line } = styles;

export const EditProfile = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);
    const [validateEdit, setvalidateEdit] = useState(false);
    const [privatise, setPrivatise] = useState(false)
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
            <ProfileNavBar navigation={navigation} />
            <View>
                <Text style={{ alignSelf: 'center', marginTop: 50, color: 'white' }}>Modifier Profile</Text>
            </View>
            <TouchableOpacity style={{ marginTop: 40, marginLeft: 35, height: 45, width: 50 }}>
                <Image style={styles.profile} source={require('../../assets/gigachad.png')} />
                <Feather name="camera" size={20} color="white" style={{ position: 'relative', bottom: 16, left: 35 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 30, marginLeft: 35 }}>
                <Text style={{ color: 'white' }}>Modifier le pseudo</Text>
                <InputText placeholder="Nouveau pseudo" />
            </View>
            <View style={{ marginLeft: 35, marginTop: 10 }}>
                <Text style={{ marginBottom: 10, color: 'white' }}>Visibilité du contenu</Text>
                <View style={{ display: 'flex', flexDirection: 'row', width: 230 }}>
                    <Text style={{ color: 'white' }}>
                        Choississez si toutes vos publications sont publiques ou privées. Si vous réactivez la
                        visibilité du contenu, les posts marqués individuellement comme privés resteront privés
                    </Text>
                    <TouchableOpacity
                        style={privatise ? styles.privateBtn : styles.privateBoxactive}
                        onPress={() => {
                            setPrivatise(!privatise);
                        }}
                    >
                        <View
                            style={privatise ? styles.privateBtnball : styles.privateBtnballactive}
                        ></View>
                    </TouchableOpacity>
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

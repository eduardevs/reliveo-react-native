import { View, Text, StyleSheet, Image, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import styles from './styles';
import BottomNav from '../../containers/bottomNav/bottomNav';
import { AuthContext } from '../../context/AuthContext';
import { Entypo } from '@expo/vector-icons';
import ProfileNavBar from '../../components/profile/navBar';
import { InputText } from '../../components/inputs/InputText/InputText';
import { Feather } from '@expo/vector-icons';
import Gallery from '../../containers/camera/Gallery';
import IndexPhoto from '../../containers/camera/photo/indexPhoto';
import { firebase } from '../../../firebaseConfig';
import useUpdateProfileName from '../../utils/hooks/useUpdateProfile';

const { Container, InnerContainer, PageTitle, StyledFormArea, SubTitle, StyledButton, ButtonText, Line } = styles;

export const EditProfile = ({ navigation, photo }) => {
    const { userInfo } = useContext(AuthContext);
    const [validateEdit, setvalidateEdit] = useState(false);
    const [privatise, setPrivatise] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [showChoice, setshowChoice] = useState(false);
    const [image, setImage] = useState();
    const [urlimage, seturlImage] = useState();
    const [uploding, setUploding] = useState(false);
    const [userId, setuserId] = useState();

    const handleTextChange = (val) => {
        setName(val);
    };
    useEffect(() => {
        if (userInfo) {
            const { data } = userInfo;
            console.log(data);
            if (data) {
                const [user] = data;
                console.log(user.name);
                setName(user.name);
                setEmail(user.email);
                setuserId(user.id);
            }
        }
    }, [userInfo]);

    const updateProfile = () => {
        if (name) {
            
            useUpdateProfileName(name, userInfo.userid);
            
        }
        uplodPicture();
    };

    const uplodPicture = async () => {
        const response = await fetch(image);
        const blob = await response.blob();
        console.log(image);
        const filename = `photoProfil/photo${image.slice(-40, -4)}`;
        const ref = firebase.storage().ref().child(filename).put(blob);
        ref.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
                setUploding(true);
            },
            (error) => {
                setUploding(false);
                console.log(error);
                return;
            },
            () => {
                ref.snapshot.ref.getDownloadURL().then((url) => {
                    setUploding(false);
                    console.log('download url : ' + url);
                    blob.close();
                    seturlImage(url);
                    return;
                });
            },
        );
    };

    return (
        <View style={styles.container}>
            <ProfileNavBar navigation={navigation} />
            <View>
                <Text style={{ alignSelf: 'center', marginTop: 50, color: 'white' }}>Modifier Profile</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setshowChoice(!showChoice);
                }}
                style={{ marginTop: 40, marginLeft: 35, height: 45, width: 50 }}
            >
                <Image style={styles.profile} source={{ uri: photo }} />
                <Feather name="camera" size={20} color="white" style={{ position: 'relative', bottom: 16, left: 35 }} />
            </TouchableOpacity>
            <View style={showChoice ? styles.pictureOption : styles.nopictureOption}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('IndexPhoto');
                    }}
                    style={styles.reportButton}
                >
                    <Text style={{ color: 'white' }}>Prendre une nouvelle Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Gallery(setImage);
                    }}
                    style={styles.reportButton}
                >
                    <Text style={{ color: 'white' }}>Accéder à votre Gallerie</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30, marginLeft: 35 }}>
                <Text style={{ color: 'white' }}>Modifier le pseudo</Text>
                <InputText placeholder="Nouveau pseudo" onChangeText={handleTextChange} />
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
                        <View style={privatise ? styles.privateBtnball : styles.privateBtnballactive}></View>
                    </TouchableOpacity>
                </View>
            </View>
            {!uploding ? (
                <TouchableOpacity
                    onPress={() => {
                        setvalidateEdit(!validateEdit);
                        navigation.navigate('Profile');
                        updateProfile();
                    }}
                    style={styles.btnedit}
                >
                    <Text style={styles.btnedittext}>Valider</Text>
                </TouchableOpacity>
            ) : (
                <ActivityIndicator size="large" color="white" />
            )}
        </View>
    );
};

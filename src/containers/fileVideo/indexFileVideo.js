import React, { useState } from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import { Ionicons, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import {Video} from "expo-av";
import dimensions from "react-native-web/dist/exports/Dimensions";

export default function IndexFileVideo({ navigation }) {
    const [IsLike, setIsLike] = useState(false);

    return (
        <>
            <View style={styles.containerVideo}>
                <Video
                    style={{
                        position:'absolute',
                        top:-10,
                        aspectRatio: 9 / 16,
                        height: Dimensions.get("window").height,
                        width: Dimensions.get("window").width,
                    }}
                    source={{
                        uri: 'https://firebasestorage.googleapis.com/v0/b/reliveo-f50d4.appspot.com/o/reliveo%2Freliveof3a0a23f-c660-4489-aab0-746ad83719cf?alt=media&token=8c0758fd-fa66-4a3d-b715-99adcc6a6358',
                    }}
                    resizeMode="contain"
                    isLooping
                    shouldPlay
                />
            </View>
            <View style={styles.containerVideoButton}>
                <View style={styles.containerVideoButtonSectionTop}>
                    <View style={styles.containerVideoButtonSectionInterne}>
                        {/*<TouchableOpacity onPress={() => console.log('return')}>*/}
                        {/*    <MaterialIcons name={'keyboard-arrow-left'} size={30} color="black" />*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                    <View style={styles.containerVideoButtonSectionInterne}>
                        <TouchableOpacity
                            style={styles.buttonUserProfil}
                            onPress={
                                () => navigation.navigate('Profile')
                                // console.log('heey')
                            }
                        >
                            <Image />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('menu')}>
                            <Entypo name={'dots-three-vertical'} size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerVideoButtonSectionBottom}>
                    <View style={styles.containerVideoButtonSectionInterne}>
                        <Text style={{color:"white"}}>At Hellfest 2022</Text>
                    </View>
                    <View style={styles.containerVideoButtonSectionInterne}>
                        <TouchableOpacity onPress={() => setIsLike(!IsLike)}>
                            <AntDesign name={IsLike ? 'star' : 'staro'} size={52} color="#FBBC05" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonCreatorProfil}
                            onPress={() => console.log('page createur')}
                        >
                            <Image />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonEvent} onPress={() => console.log('page event')}>
                            <Image />
                        </TouchableOpacity>
                        <View style={styles.vueConter}>
                            <Ionicons name="eye-outline" size={20} color="#FFFFFF" />
                            <Text style={styles.textVideo}>660k</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

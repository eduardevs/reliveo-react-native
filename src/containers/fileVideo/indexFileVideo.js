import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Ionicons, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function IndexFileVideo({ navigation }) {
    const [IsLike, setIsLike] = useState(false);

    return (
        <>
            <View style={styles.containerVideo}>
                <Text>Ceci est une vidéo</Text>
            </View>
            <View style={styles.containerVideoButton}>
                <View style={styles.containerVideoButtonSectionTop}>
                    <View style={styles.containerVideoButtonSectionInterne}>
                        <TouchableOpacity onPress={() => console.log('return')}>
                            <MaterialIcons name={'keyboard-arrow-left'} size={30} color="black" />
                        </TouchableOpacity>
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
                        <Text>At Hellfest 2022</Text>
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

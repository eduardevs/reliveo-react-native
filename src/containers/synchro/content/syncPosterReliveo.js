import React, {useContext} from 'react';
import {Button, Dimensions, Image, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import Camera from '../../../assets/camera.png';
import ImageEvent from "../../../assets/ImageEvent.jpg";
import event from "../JSON/FakeData.json";
import Moment from "moment";
import {SyncEventContext} from "../../../context/SyncEventContext";

export default function SyncPosterReliveo({setSynchroEtape}) {
    const {
        banner,
        name,
    } = useContext(SyncEventContext)

    return (
        <>
            <Text style={styles.bottomTitle}>Poster un Reliveo</Text>
            <Text style={styles.bottomText}>Vous êtes synchronisé à :</Text>
            <View  style={styles.ImageEventContainer}>
                <View style={{width: Dimensions.get("window").width, height:200}}>
                    <Image
                        style={{flex: 1}}
                        source={{
                            uri: banner
                        }}
                        resizeMode="contain"
                    />
                </View>
                <View>
                    <Text style={styles.bottomInfoTitle}>{name}</Text>
                </View>
            </View>
            {/*<TouchableOpacity*/}
            {/*    style={styles.button}*/}
            {/*    onPress={() => setSynchroEtape('SyncChooseScene')}*/}
            {/*>*/}
            {/*    <Text style={styles.buttonText}>Changer de scène</Text>*/}
            {/*</TouchableOpacity>*/}

            <View>
                <Text style={styles.bottomText}>Vous êtes maintenant connecté à la piste audio.</Text>
                <Text style={styles.bottomText}>Cliquez sur le bouton ci-dessous pour poster une photo ou une vidéo</Text>
            </View>
            <TouchableOpacity
                onPress={() => setSynchroEtape('IndexVideo')}
                style={styles.ImageQrCodeBtnContainer}
            >
                <Image source={Camera}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setSynchroEtape('SyncDesynchro')}
            >
                <Text style={styles.bottomLien}>Désynchronisation</Text>
            </TouchableOpacity>
        </>
    );
}

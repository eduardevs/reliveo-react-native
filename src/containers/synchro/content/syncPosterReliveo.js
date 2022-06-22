import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import Camera from '../../../assets/camera.png';
import ImageEvent from "../../../assets/ImageEvent.jpg";

export default function SyncPosterReliveo({setSynchroEtape}) {

    return (
        <>
            <Text style={styles.bottomTitle}>Poster un Reliveo</Text>
            <Text style={styles.bottomText}>Vous êtes synchronisé à :</Text>
            <View  style={styles.ImageEventContainer}>
                <Image source={ImageEvent}/>
                <View>
                    <Text style={styles.bottomInfoTitle}>Hellfest 2022</Text>
                    <Text style={styles.bottomInfoTitle}>SCENE ALTAR</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setSynchroEtape('SyncChooseScene')}
            >
                <Text style={styles.buttonText}>Changer de scène</Text>
            </TouchableOpacity>

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

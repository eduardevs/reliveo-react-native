import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import ImageQrCodeBtn from '../../../../../assets/ImageQrCodeBtn.png';

export default function SyncInfoQrCode({setSynchroEtape}) {

    return (
        <>
            <Text style={styles.bottomTitle}>Veuillez vous synchroniser à un événement pour poster du contenu</Text>
            <View>
                <Text style={styles.bottomText}>Vous êtes actuellement synchronisé à aucun évenement.</Text>
                <Text style={styles.bottomText}>Pour se synchroniser :</Text>
                <Text style={styles.bottomList}>1. Rendez vous au lieu de l’évènement</Text>
                <Text style={styles.bottomList}>2. Allez sur la page de l’évènement en cours et appuyez sur
                    “synchroniser”, ou scannez le QR code fourni par l’évènement</Text>
                <Text style={styles.bottomList}>3. Géolocalisez vous pour certifier votre participation à
                    l’évènement</Text>
            </View>
            <TouchableOpacity
                onPress={() => setSynchroEtape('SyncQrCodeScan')}
                style={styles.ImageQrCodeBtnContainer}
            >
                <Image source={ImageQrCodeBtn}/>
            </TouchableOpacity>
        </>
    );
}

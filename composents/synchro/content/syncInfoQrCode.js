import React from 'react';
import {Text, View} from "react-native";

import styles from '../styles'

export default function SyncInfoQrCode() {

    return (
        <>
            <Text style={styles.bottomTitle}>
                Veuillez vous synchroniser à un événement pour poster du contenu
            </Text>
            <View>
                <Text style={styles.bottomText}>
                    Vous êtes actuellement synchronisé à aucun évenement.
                </Text>
                <Text style={styles.bottomText}>
                    Pour se synchroniser :
                </Text>
                <Text style={styles.bottomList}>
                    1. Rendez vous au lieu de l’évènement
                </Text>
                <Text style={styles.bottomList}>
                    2. Allez sur la page de l’évènement en cours
                    et appuyez sur “synchroniser”, ou scannez
                    le QR code fourni par l’évènement
                </Text>
                <Text style={styles.bottomList}>
                    3. Géolocalisez vous pour certifier votre participation à l’évènement
                </Text>
            </View>
        </>
    );
}

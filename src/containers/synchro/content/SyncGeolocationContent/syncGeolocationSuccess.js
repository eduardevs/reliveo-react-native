import React from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import styles from "../../styles";


export default function SyncGeolocationSuccess({eventInfo, setSynchroEtape}) {

    return (
        <>
            <Text style={styles.bottomSuccessText}>Position validée !</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.Rue}</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.CodePostal} {eventInfo.Ville}</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.latitude}, {eventInfo.longitude}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setSynchroEtape('SyncChooseScene')}
            >
                <Text style={styles.buttonText}>Finaliser synchro</Text>
            </TouchableOpacity>
        </>

    )
}
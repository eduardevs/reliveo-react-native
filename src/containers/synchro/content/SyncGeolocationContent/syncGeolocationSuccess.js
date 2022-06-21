import React from 'react';
import {Button, Text} from 'react-native';
import styles from "../../styles";


export default function SyncGeolocationSuccess({eventInfo, setSynchroEtape}) {

    return (
        <>
            <Text style={styles.bottomSuccessText}>Position validée !</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.rue}</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.postalCode} {eventInfo.city}</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.latitude}, {eventInfo.longitude}</Text>
            <Button
                onPress={() => setSynchroEtape('SyncChooseScene')}
                title="Finaliser synchro"
            />
        </>

    )
}
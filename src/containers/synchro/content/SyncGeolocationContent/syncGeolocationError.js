import React from 'react';
import {Text} from 'react-native';
import styles from "../../styles";

export default function SyncGeolocationError({eventInfo}) {
    return (
        <>
            <Text style={styles.bottomErrorText}>Position invalide</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.rue}</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.postalCode} {eventInfo.city}</Text>
            <Text style={styles.bottomInfoText}>{eventInfo.latitude}, {eventInfo.longitude}</Text>
        </>
    )
}
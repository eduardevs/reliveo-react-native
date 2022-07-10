import React, {useContext} from 'react';
import {Text} from 'react-native';
import styles from "../../styles";
import {SyncEventContext} from "../../../../context/SyncEventContext";

export default function SyncGeolocationError() {
    const {
        codepostal,
        rue,
        ville,
        latitude,
        longitude,
    } = useContext(SyncEventContext)

    return (
        <>
            <Text style={styles.bottomErrorText}>Position invalide</Text>
            <Text style={styles.bottomInfoText}>{rue}</Text>
            <Text style={styles.bottomInfoText}>{codepostal} {ville}</Text>
            <Text style={styles.bottomInfoText}>{latitude} - {longitude}</Text>
        </>
    )
}
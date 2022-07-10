import React, {useContext} from 'react';
import {Button, Text, TouchableOpacity} from 'react-native';
import styles from "../../styles";
import {SyncEventContext} from "../../../../context/SyncEventContext";


export default function SyncGeolocationSuccess({setSynchroEtape}) {

    const {
        codepostal,
        rue,
        ville,
        latitude,
        longitude,

        synchronisation,
    } = useContext(SyncEventContext)

    const finaliserSynchro = () => {
        synchronisation(true)
        setSynchroEtape('SyncPosterReliveo')
    }

    return (
        <>
            <Text style={styles.bottomSuccessText}>Position validée !</Text>
            <Text style={styles.bottomInfoText}>{rue}</Text>
            <Text style={styles.bottomInfoText}>{codepostal} {ville}</Text>
            <Text style={styles.bottomInfoText}>{latitude} - {longitude}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => finaliserSynchro()}
            >
                <Text style={styles.buttonText}>Finaliser synchro</Text>
            </TouchableOpacity>
        </>

    )
}
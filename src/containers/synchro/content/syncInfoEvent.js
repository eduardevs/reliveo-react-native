import React from 'react';
import {Button, Image, Picker, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import ImageEvent from '../../../assets/ImageEvent.jpg';
const event = require('../JSON/FakeData.json');

export default function SyncInfoEvent({setSynchroEtape}) {
    return (
        <>
            <Text style={styles.bottomTitle}>Synchronisation a un événement</Text>
            <Text style={styles.bottomText}>Vous tentez de vous synchroniser à :</Text>
            <View  style={styles.ImageEventContainer}>
                <Image source={ImageEvent}/>
                <View>
                    <Text style={styles.bottomInfoTitle}>{event.event.Titre}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.Rue}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.CodePostal} {event.event.Ville}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.Date}</Text>
                </View>
            </View>
            <Text style={styles.bottomText}>Vous devez à présent vous géolocaliser pour confirmer votre présence à
                l’événement.</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setSynchroEtape('SyncGeolocation')}
            >
                <Text style={styles.buttonText}>Se géolocaliser</Text>
            </TouchableOpacity>
        </>
    );
}

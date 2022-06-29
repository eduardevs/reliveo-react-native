import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import ImageEvent from '../../../assets/ImageEvent.jpg';
import event from "../JSON/FakeData.json";

export default function ({setSynchroEtape}) {

    return (
        <>
            <Text style={styles.bottomTitle}>Se désynchroniser</Text>
            <Text style={styles.bottomText}>Vous vous apprétez à vous
                désynchroniser de :</Text>
            <View  style={styles.ImageEventContainer}>
                <Image source={ImageEvent}/>
                <View>
                    <Text style={styles.bottomInfoTitle}>{event.event.Titre}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.Rue}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.CodePostal} {event.event.Ville}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.Date}</Text>
                </View>
            </View>
            <Text style={styles.bottomText}>La désynchronisation vous empêchera de poster du contenu pour cet événement.</Text>
            <Text style={styles.bottomText}>Pour vous re-synchroniser avec cet événement, vous allez devoir vous géolocaliser. </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setSynchroEtape('SyncInfoQrCode')}
            >
                <Text style={styles.buttonText}>Désynchronisation</Text>
            </TouchableOpacity>
        </>
    );
}

import React, {useContext} from 'react';
import {Button, Dimensions, Image, Picker, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import ImageEvent from '../../../assets/ImageEvent.jpg';

import {SyncEventContext} from "../../../context/SyncEventContext";
import Moment from "moment";

export default function SyncInfoEvent({setSynchroEtape}) {
    const {
        banner,
        name,
        codepostal,
        rue,
        ville,
        dateStart,
        dateEnd,
    } = useContext(SyncEventContext)
    return (
        <>
            <Text style={styles.bottomTitle}>Synchronisation a un événement</Text>
            <Text style={styles.bottomText}>Vous tentez de vous synchroniser à :</Text>
            <View style={styles.ImageEventContainer}>
                <View style={{width: Dimensions.get("window").width, height:200}}>
                    <Image
                        style={{flex: 1}}
                        source={{
                            uri: banner
                        }}
                        resizeMode="contain"
                    />
                </View>
                <View>
                    <Text style={styles.bottomInfoTitle}>{name}</Text>
                    <Text style={styles.bottomInfoText}>{rue}</Text>
                    <Text style={styles.bottomInfoText}>{codepostal} {ville}</Text>
                    <Text style={styles.bottomInfoText}>{Moment(dateStart).format('yyyy-MM-DD') + " - " + Moment(dateEnd).format('yyyy-MM-DD')}</Text>
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
    )
        ;
}

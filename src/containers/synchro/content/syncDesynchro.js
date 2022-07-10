import React, {useContext} from 'react';
import {Button, Dimensions, Image, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import ImageEvent from '../../../assets/ImageEvent.jpg';
import event from "../JSON/FakeData.json";
import {SyncEventContext} from "../../../context/SyncEventContext";
import Moment from "moment";

export default function ({setSynchroEtape}) {
    const {
        banner,
        name,
        codepostal,
        rue,
        ville,
        dateStart,
        dateEnd,
        synchronisation
    } = useContext(SyncEventContext)

    return (
        <>
            <Text style={styles.bottomTitle}>Se désynchroniser</Text>
            <Text style={styles.bottomText}>Vous vous apprétez à vous
                désynchroniser de :</Text>
            <View  style={styles.ImageEventContainer}>
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
            <Text style={styles.bottomText}>La désynchronisation vous empêchera de poster du contenu pour cet événement.</Text>
            <Text style={styles.bottomText}>Pour vous re-synchroniser avec cet événement, vous allez devoir vous géolocaliser. </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {

                    synchronisation(false)
                    setSynchroEtape('SyncInfoQrCode')
                }}
            >
                <Text style={styles.buttonText}>Désynchronisation</Text>
            </TouchableOpacity>
        </>
    );
}

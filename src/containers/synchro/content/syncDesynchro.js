import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import ImageEvent from '../../../../../assets/ImageEvent.jpg';

export default function ({setSynchroEtape}) {

    return (
        <>
            <Text style={styles.bottomTitle}>Se désynchroniser</Text>
            <Text style={styles.bottomText}>Vous vous apprétez à vous
                désynchroniser de :</Text>
            <View  style={styles.ImageEventContainer}>
                <Image source={ImageEvent}/>
                <View>
                    <Text style={styles.bottomInfoTitle}>Hellfest 2022</Text>
                    <Text style={styles.bottomInfoText}>Rue du Champ Louet</Text>
                    <Text style={styles.bottomInfoText}>44190 Clisson</Text>
                    <Text style={styles.bottomInfoText}>june 17 - 19, 2022</Text>
                </View>
            </View>
            <Text style={styles.bottomText}>La désynchronisation vous empêchera de poster du contenu pour cet événement.</Text>
            <Text style={styles.bottomText}>Pour vous re-synchroniser avec cet événement, vous allez devoir vous géolocaliser. </Text>
            <Button
                onPress={() => setSynchroEtape('SyncInfoQrCode')}
                title="Désynchronisation"
            />
        </>
    );
}

import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from "react-native";

import styles from '../styles'
import ImageEvent from '../../../assets/ImageEvent.jpg';

export default function SyncInfoEvent({setSynchroEtape}) {

    return (
        <>
            <Text style={styles.bottomTitle}>Synchronisation a un événement</Text>
            <Text style={styles.bottomText}>Vous tentez de vous synchroniser à :</Text>
            <View  style={styles.ImageEventContainer}>
                <Image source={ImageEvent}/>
                <View>
                    <Text style={styles.bottomInfoTitle}>Hellfest 2022</Text>
                    <Text style={styles.bottomInfoText}>Rue du Champ Louet</Text>
                    <Text style={styles.bottomInfoText}>44190 Clisson</Text>
                    <Text style={styles.bottomInfoText}>june 17 - 19, 2022</Text>
                </View>
            </View>
            <Text style={styles.bottomText}>Vous devez à présent vous géolocaliser pour confirmer votre présence à
                l’événement.</Text>
            <Button
                onPress={() => console.log('coucou')}
                title="Se géolocaliser"
            />
        </>
    );
}

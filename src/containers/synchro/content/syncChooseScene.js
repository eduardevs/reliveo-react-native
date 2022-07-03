import React, {useState} from 'react';
import {Button, Image, Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Chevron} from 'react-native-shapes';

import styles from '../styles'
import ImageEvent from '../../../assets/ImageEvent.jpg';

const event = require('../JSON/FakeData.json');

export default function SyncChooseScene({setSynchroEtape}) {
    const [scene, setScene] = useState("");
    return (
        <>
            <Text style={styles.bottomTitle}>Synchronisation</Text>
            <Text style={styles.bottomText}>Vous êtes synchronisé à :</Text>
            <View style={styles.ImageEventContainer}>
                <Image source={ImageEvent}/>
                <View>
                    <Text style={styles.bottomInfoTitle}>{event.event.Titre}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.Rue}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.CodePostal} {event.event.Ville}</Text>
                    <Text style={styles.bottomInfoText}>{event.event.Date}</Text>
                </View>
            </View>
            <Text style={styles.bottomText}>Pour poster du contenu, veuillez à choisir une scène :</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    style={styles.picker}
                    mode="dropdown"
                    selectedValue={scene}
                    onValueChange={(value) => {
                        setScene(value)
                    }}
                >
                    {event.event.Scene.map((item, index) => {
                        return (<Picker.Item label={item} value={index} key={index} />)
                    })}
                </Picker>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setSynchroEtape('SyncPosterReliveo')}
            >
                <Text style={styles.buttonText}>Terminer</Text>
            </TouchableOpacity>
        </>
    );
}

const card = StyleSheet.create({
    card: {
        borderWidth: 1,
        width: 314,
        borderColor: "rgba(155,155,155,1)",
        borderBottomLeftRadius: 10,
        backgroundColor: "rgba(214,210,210,1)",
        marginTop: 10,
        marginLeft: 4
    },
})
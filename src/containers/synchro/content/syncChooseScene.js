import React, {useState} from 'react';
import {Button, Image, Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Chevron} from 'react-native-shapes';

import styles from '../styles'
import ImageEvent from '../../../assets/ImageEvent.jpg';

export default function SyncChooseScene({setSynchroEtape}) {
    const [scenes, setScenes] = useState([
        "TEMPLE",
        "ALTAR",
        "VALLEY",
        "WARZONE",
        "MAINSTAGE 2",
        "MAINSTAGE 1"
    ]);
    const [scene, setScene] = useState("MAINSTAGE 1");

    return (
        <>
            <Text style={styles.bottomTitle}>Synchronisation</Text>
            <Text style={styles.bottomText}>Vous êtes synchronisé à :</Text>
            <View style={styles.ImageEventContainer}>
                <Image source={ImageEvent}/>
                <View>
                    <Text style={styles.bottomInfoTitle}>Hellfest 2022</Text>
                    <Text style={styles.bottomInfoText}>Rue du Champ Louet</Text>
                    <Text style={styles.bottomInfoText}>44190 Clisson</Text>
                    <Text style={styles.bottomInfoText}>june 17 - 19, 2022</Text>
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
                    {scenes.map((item, index) => {
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
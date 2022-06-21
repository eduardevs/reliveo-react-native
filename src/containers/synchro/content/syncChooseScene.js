import React, {useState} from 'react';
import {Button, Image, Text, TextInput, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import styles from '../styles'
import ImageEvent from '../../../../../assets/ImageEvent.jpg';

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
            <View  style={styles.ImageEventContainer}>
                <Image source={ImageEvent}/>
                <View>
                    <Text style={styles.bottomInfoTitle}>Hellfest 2022</Text>
                    <Text style={styles.bottomInfoText}>Rue du Champ Louet</Text>
                    <Text style={styles.bottomInfoText}>44190 Clisson</Text>
                    <Text style={styles.bottomInfoText}>june 17 - 19, 2022</Text>
                </View>
            </View>
            <Text style={styles.bottomText}>Pour poster du contenu, veuillez à choisir une scène :</Text>


            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={ scenes.map(scene => (
                    {
                        label: scene,
                        value: scene,
                    }))}
            />

            <Button
                onPress={() => setSynchroEtape('SyncPosterReliveo')}
                title="Terminer"
            />
        </>
    );
}

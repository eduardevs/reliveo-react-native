import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Feather, Foundation} from "@expo/vector-icons";

import styles from "./styles";
import IndexSynchro from "../synchro/indexSynchro";
import ButtonReliveau from "../../assets/buttonReliveau.png";

export default function BottomNav() {
    const [bottomSynchroVisible, setBottomSynchroVisible] = useState(false);
    const [synchroEtape, setSynchroEtape] = useState('IndexVideo');

    const toggleBottomNavigationView = () => {
        setBottomSynchroVisible(!bottomSynchroVisible);
        setSynchroEtape('IndexVideo');
    };

    return (
        <>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#2E2E2E', "transparent"]}
                    start={{
                        x: 0,
                        y: .8
                    }}
                    end={{
                        x: 0,
                        y: .3
                    }}
                    style={styles.gradientButtonContainer}
                />
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.bottomMenuButton}
                        onPress={() => console.log("Explorer")}
                    >
                        <Foundation name="magnifying-glass" size={24} color="white" />
                        <Text style={styles.textButton}>Explorer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bottomMenuButton}
                        onPress={toggleBottomNavigationView}
                    >
                        <Image source={ButtonReliveau}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bottomMenuButton}
                        onPress={() => console.log("Plus")}
                    >
                        <Feather name="menu" size={24} color={'white'}/>
                        <Text style={styles.textButton}>Plus</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <IndexSynchro synchroEtape={synchroEtape} setSynchroEtape={setSynchroEtape} visible={bottomSynchroVisible}
                          toggleBottomNavigationView={toggleBottomNavigationView}/>
        </>
    );
}
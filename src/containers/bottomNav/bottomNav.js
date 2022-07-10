import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Foundation } from '@expo/vector-icons';

import styles from './styles';
import IndexSynchro from '../synchro/indexSynchro';
import ButtonReliveau from '../../assets/buttonReliveau.png';
import ButtonReliveauSync from '../../assets/buttonReliveauSync.png';
import { colors } from '../../theme/palette';
import {SyncEventContext} from "../../context/SyncEventContext";
// import { MenuPlus } from '../../components/buttons/MenuPlus/MenuPlus';

export const BottomNav = ({ state, descriptors, navigation, ...props }) => {
    const [bottomSynchroVisible, setBottomSynchroVisible] = useState(false);
    const [synchroEtape, setSynchroEtape] = useState('SyncInfoQrCode');

    const toggleBottomNavigationView = () => {
        setBottomSynchroVisible(!bottomSynchroVisible);
        if (userSynchro) {
            setSynchroEtape('SyncPosterReliveo');
        } else {
            setSynchroEtape('SyncInfoQrCode');
        }
    };

    const {
        userSynchro
    } = useContext(SyncEventContext)

    return (
        <>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#2E2E2E', 'transparent']}
                    start={{
                        x: 0,
                        y: 0.8,
                    }}
                    end={{
                        x: 0,
                        y: 0.3,
                    }}
                    style={styles.gradientButtonContainer}
                />
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.bottomMenuButton} onPress={() => navigation.navigate('Home')}>
                        <Foundation name="magnifying-glass" size={24} color="white" />
                        <Text style={styles.textButton}>Explorer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomMenuButton} onPress={toggleBottomNavigationView}>
                        <Image source={userSynchro ? ButtonReliveauSync : ButtonReliveau} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomMenuButton} onPress={() => navigation.openDrawer()}>
                        <Feather name="menu" size={24} color={'white'} />
                        <Text style={styles.textButton}>Plus</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <IndexSynchro
                synchroEtape={synchroEtape}
                setSynchroEtape={setSynchroEtape}
                visible={bottomSynchroVisible}
                toggleBottomNavigationView={toggleBottomNavigationView}
            />
        </>
    );
};

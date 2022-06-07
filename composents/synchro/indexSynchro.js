import React, { useState } from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import { BottomSheet } from 'react-native-btr';

import styles from './styles'
import SyncInfoQrCode from "./content/syncInfoQrCode";

export default function IndexSynchro() {
    const [visible, setVisible] = useState(false);

    const toggleBottomNavigationView = () => {
        setVisible(!visible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Button
                    onPress={toggleBottomNavigationView}
                    title="Synchronisation"
                />
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={toggleBottomNavigationView}
                    onBackdropPress={toggleBottomNavigationView}
                >
                    <View style={styles.bottomNavigationView}>
                        <View style={styles.bottomContainer}>
                            <SyncInfoQrCode />
                        </View>
                    </View>
                </BottomSheet>
            </View>
        </SafeAreaView>
    );
}

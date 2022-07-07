import React, { useEffect, useContext, useState } from 'react';
import BottomNav from './bottomNav/bottomNav';
import IndexFileVideo from './fileVideo/indexFileVideo';
import { Dimensions, StyleSheet, View } from 'react-native';

export const HomeContainer = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <IndexFileVideo navigation={navigation} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

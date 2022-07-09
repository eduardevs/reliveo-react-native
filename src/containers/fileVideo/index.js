import React, { useEffect, useContext, useState } from 'react';
import BottomNav from '../bottomNav/bottomNav';
import IndexFileVideo from './postSingle';
import { Dimensions, StyleSheet, View } from 'react-native';
import FeedScreen from "./feedScreen";

export const HomeContainer = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <FeedScreen navigation={navigation} />
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

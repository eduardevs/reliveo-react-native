import React, {useEffect, useContext, useState} from 'react';
import BottomNav from "./bottomNav/bottomNav";
import IndexFileVideo from "./fileVideo/indexFileVideo";
import {Dimensions, StyleSheet, View} from "react-native";


export const Home = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <IndexFileVideo/>
            </View>
            <BottomNav navigation={navigation}/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    }
})
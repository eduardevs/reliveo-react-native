import { View, Text, Image, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../../context/AuthContext';

export default function Favoris () {
    const [activeBtn, setActiveBtn] = useState(false);
    const [isPrivate, setisPrivate] = useState(false);
    const [favoris, setFavoris] = useState([1, 2, 3, 4, 5]);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flexWrap: 'wrap',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'center',
                    paddingTop: 30,
                    backgroundColor: '#2E2E2E',
                }}
            >
                {favoris.map((favoris, index) => {
                    
                    return (
                        <TouchableOpacity style={styles.carre} key={index}>
                            <View style={styles.smallrect}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Ionicons name="eye-outline" size={20} color="#FFFFFF" />
                                    <Text style={{ alignSelf: 'center', color: '#FFFFFF', marginLeft: 5 }}>
                                        660k
                                    </Text>
                                </View>
                            </View>
                            <View style={isPrivate ? styles.lock : styles.nolock}>
                                <MaterialIcons name="lock" size={20} color="#FFFFFF" />
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </ScrollView>
    );
};
import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



export default function ProfileNavBar() {
  return (
    <View style={styles.container}>
            <Entypo name="chevron-left" size={24} color="white" />
            <FontAwesome name="gear" size={24} color="white" />
    </View>
  )
}
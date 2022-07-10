import React, {useEffect, useRef, useState,useContext} from 'react'
import {Dimensions, FlatList, Text, View} from "react-native";
import styles from "./styles";
import {PostSingle} from "./postSingle";
import PostSingleInfos from "./postSingleInfos";
import axios from "axios";
import useGetFeed from "./useGetFeed";

import {AuthContext} from "../../context/AuthContext";

export default function FeedScreen({navigation}) {
    const mediaRefs = useRef([])
    const [reliveos, setReliveos] = useState([])

    const getfeed = useGetFeed()

    const {userInfo} = useContext(AuthContext)
    console.log(userInfo)

    useEffect(() => {
        try {
            getfeed()
                .then(res => {
                    setReliveos(res.data)
                })
        } catch (error) {
            console.error(error.message)
        }
    }, []);

    const onViewableItemsChanged = useRef(({changed}) => {
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key]
            if (cell) {
                cell.play()
            } else {
                cell.stop()
            }
        })
    })
    const renderItem = ({item, index}) => {
        let i = 0
        return (
            <View style={[{
                flex: 1,
                height: Dimensions.get('window').height
            }, index % 2 === 0 ? {backgroundColor: 'blue'} : {backgroundColor: 'pink'}]}>
                <PostSingle ref={PostSingleRef => (mediaRefs.current[item.id] = PostSingleRef)} item={item}/>
                <PostSingleInfos navigation={navigation} item={item} userInfo={userInfo}/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={reliveos}
                windowSize={4}
                initialNumToRender={0}
                maxToRenderPerBatch={2}
                removeClippedSubviews
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 100
                }}
                renderItem={renderItem}
                pagingEnabled
                keyExtractor={item => item.id}
                decelerationRate={'normal'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}
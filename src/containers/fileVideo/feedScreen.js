import React, {useRef} from 'react'
import {Dimensions, FlatList, Text, View} from "react-native";
import styles from "./styles";
import {PostSingle} from "./postSingle";
import PostSingleInfos from "./postSingleInfos";

export default function FeedScreen({navigation}) {
    const mediaRefs = useRef([])
    const array = [
        1,2,3,4,5,6
    ]

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
                <PostSingle ref={PostSingleRef => (mediaRefs.current[item] = PostSingleRef)}/>
                {/*<Text>{item}</Text>*/}
                <PostSingleInfos navigation={navigation} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={array}
                windowSize={4}
                initialNumToRender={0}
                maxToRenderPerBatch={2}
                removeClippedSubviews
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 100
                }}
                renderItem={renderItem}
                pagingEnabled
                keyExtractor={item => item}
                decelerationRate={'normal'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>
    )
}
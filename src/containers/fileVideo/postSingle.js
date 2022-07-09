import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import styles from './styles';
import {Video} from "expo-av";

export const PostSingle = forwardRef((props, parentRef) => {

    const ref = useRef(null)
    useImperativeHandle(parentRef, () => ({
        play,
        unload,
        stop
    }))

    useEffect(() => {
        return () => unload()
    }, [])

    const play = async () => {
        if (ref.current == null) {
            return
        }
        const status = await ref.current.getStatusAsync()
        if (status?.isPlaying) {
            return
        }
        try {
            await ref.current.playAsync()
        } catch (e) {
            console.log(e)
        }
    }

    const stop = async () => {
        if (ref.current == null) {
            return
        }
        const status = await ref.current.getStatusAsync()
        if (status?.ifPlaying) {
            return
        }
        try {
            await ref.current.stopAsync()
        } catch (e) {
            console.log(e)
        }
    }


    const unload = async () => {
        if (ref.current == null) {
            return
        }
        try {
            await ref.current.unloadAsync()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.containerVideo}>
            <Video
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                }}
                ref={ref}
                source={{
                    uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/av1/360/Big_Buck_Bunny_360_10s_1MB.mp4'
                }}
                resizeMode="cover"
                isLooping
                shouldPlay
            />
        </View>
    );
})

export default PostSingle
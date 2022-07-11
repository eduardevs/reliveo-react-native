import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import styles from './styles';
import {Video} from "expo-av";
import useUpdateViewNumber from "./useUpdateViewNumber";

export const PostSingle = forwardRef((props, parentRef) => {
    const ref = useRef(null)
    useImperativeHandle(parentRef, () =>({
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
            await ref.current.replayAsync()
        } catch (error) {
            console.log(error)
        }
    }

    const stop = async () => {
        if (ref.current == null) {
            return
        }
        const status = await ref.current.getStatusAsync()
        if (!status?.isPlaying) {
            return
        }
        try {
            await ref.current.stopAsync()
        } catch (error) {
            console.log(error)
        }
    }

    const unload = async () => {
        if (ref.current == null) {
            return
        }
        try {
            await ref.current.unloadAsync()
            // console.log('unload')
        } catch (error) {
            console.log(error)
        }
    }


    return (
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
                // uri: props.item.videoUrl
                uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
            }}
            resizeMode="cover"
            shouldPlay={false}
            isLooping
        />
    );
})

export default PostSingle
// import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
// import {Dimensions, Image, Text, View} from 'react-native';
// import styles from './styles';
// import {Video} from "expo-av";
// import useUpdateViewNumber from "./useUpdateViewNumber";
//
// export const PostSingle = forwardRef((props, parentRef) => {
//     const ref = useRef(null)
//     useImperativeHandle(parentRef, () => ({
//         play,
//         unload,
//         stop
//     }))
//
//     // console.log(props)
//
//     const addView = useUpdateViewNumber()
//
//     useEffect(() => {
//         return () => unload()
//     }, [])
//
//     const play = async () => {
//         if (ref.current == null) {
//             return
//         }
//         const status = await ref.current.getStatusAsync()
//         if (status?.isPlaying) {
//             return
//         }
//         try {
//             console.log("play : " + props.index)
//             // await addView(props.viewnumber, props.id)
//             await ref.current.playAsync()
//         } catch (e) {
//             console.log(e)
//
//         }
//     }
//
//     const stop = async () => {
//         if (ref.current == null) {
//             return
//         }
//         const status = await ref.current.getStatusAsync()
//         if (!status?.isPlaying) {
//             return
//         }
//         try {
//             console.log("stop : " + props.index)
//             await ref.current.stopAsync()
//         } catch (e) {
//             console.log(e)
//         }
//     }
//
//
//     const unload = async () => {
//         if (ref.current == null) {
//             return
//         }
//         try {
//             console.log("unload : " + props.index)
//             await ref.current.unloadAsync()
//         } catch (e) {
//             console.log(e)
//         }
//     }
//
//     return (
//         <View style={styles.containerVideo}>
//             <Video
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     height: Dimensions.get("window").height,
//                     width: Dimensions.get("window").width,
//                 }}
//                 ref={ref}
//                 source={{
//                     // uri: props.item.videoUrl
//                     uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
//                 }}
//                 resizeMode="cover"
//                 shouldPlay={true}
//             />
//         </View>
//     );
// })
//
// export default PostSingle
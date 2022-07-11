import { View, Text, Image, Animated, TouchableOpacity, TouchableHighlight} from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../../../context/AuthContext';
import Events from '../eventstab/index';
import useGetPostsList from '../../../utils/hooks/useGetPostList';
import * as VideoThumbnails from 'expo-video-thumbnails';


export default function Content () {
    const [isPrivate, setisPrivate] = useState(false);
    const [activeBtn, setActiveBtn] = useState(false);
    const { postInfo, post} = useContext(AuthContext);
    const [postTitle, setPostTitle] = useState()
    const [uriVideo, setUriVideo] = useState('https://firebasestorage.googleapis.com/v0/b/reliveo-f50d4.appspot.com/o/reliveo%2Freliveo8f1496d6-20be-4442-ada0-123a5a412ba3?alt=media&token=e6fcb049-937e-411c-8af9-695469df376e')
    const [thumbnail, setThumbnail] = useState()
    
    useEffect(() => {
        const generateThumbnail = async (uriVideo) => {
            try {
              const { uri } = await VideoThumbnails.getThumbnailAsync(
                uriVideo,
                {
                  time: 5000,
                }
              );
              console.log(uri)
              setThumbnail(uri);
            } catch (e) {
              console.warn(e);
            }
          };
          generateThumbnail(uriVideo)
    },[])
    

    useEffect(() => {
        
        if (postInfo) {
            const dataI = postInfo;
            if (dataI) {
                setPostTitle(dataI);
            }
        }
    }, [postInfo]);

    // useEffect(() => {
    
    //     useGetPostsList()
    //         .then((res) => post(res))
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [setPostTitle])
    // const handleSubmitt = () =>{
    //     useGetPostsList().then((res) => post(res))
    // }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    flexWrap: 'wrap',
                    display: 'flex',
                    justifyContent:'center',
                    flexDirection: 'row',
                    paddingTop: 30,
                    backgroundColor: '#2E2E2E',
                }}
            >
                
                {postTitle && postTitle.map((post, index) => {
                    
                    
                    return (
                        <TouchableOpacity
                            // onPress={() => {
                            //     navigation.navigate('DiffuseurScreen');
                            // }}
                            style={styles.carre}
                            key={post.id}
                        >
    

                            {/* <Text style={{color:'white'}}>{post.videoUrl}</Text> */}
                            <Image
                                paused={true}
                                style={styles.carre}
                                source={{ uri: thumbnail }}
                                key={post.id}
                            >
                               
                            </Image>
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
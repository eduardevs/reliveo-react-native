import {StatusBar} from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import {ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {KeyboardAvoidingWrapper} from '../../utils/helpers/KeyboardAvoidingWrapper';
import {InputText} from '../../components/inputs/InputText/InputText';
import {styles} from '../../theme/layout';
import {colors} from '../../theme/palette';
import {firebase} from "../../../firebaseConfig";
import Gallery from "../../containers/camera/Gallery";
import {Feather} from "@expo/vector-icons";

import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
// import { SafeAreaView } from 'react-native-srafe-area-context'

const {
    Container,
    InnerContainer,
    PageTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
} = styles;

const {secondary} = colors;

export const ProfileSignupScreen = ({
                                        navigation,
                                        handleSubmitProfile,
                                        data,
                                        setData,
                                        hidePassword,
                                        setHidePassword,
                                        handleSubmit,
                                        isSubmitting,
                                        messageType,
                                        message,
                                        setImage,
                                        image
                                    }) => {


    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);


    return (
        <KeyboardAvoidingWrapper>
            <View style={Container}>
                <StatusBar style="dark"/>
                <View style={InnerContainer}>
                    <Text style={PageTitle}>Personalisez votre profil {data.name}! </Text>

                    <View style={StyledFormArea}>
                        <View style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center"}}>
                            <Menu
                                visible={visible}
                                anchor={

                                    <TouchableOpacity
                                        onPress={showMenu}
                                        style={styles.reportButton}
                                    >
                                        <Image style={{
                                            marginTop: 40,
                                            height: 150,
                                            width: 150,
                                            borderRadius: 8000,
                                            backgroundColor: "black"
                                        }} source={{uri: image}}/>
                                    </TouchableOpacity>
                                }
                                onRequestClose={hideMenu}
                            >
                                <MenuItem onPress={() => {
                                    navigation.navigate('IndexPhoto');
                                    hideMenu()
                                }}>
                                    Prendre une nouvelle Photo
                                </MenuItem>
                                <MenuItem
                                    onPress={() => {
                                        Gallery(setImage);
                                        hideMenu()
                                    }}>
                                    Accéder à votre Gallerie
                                </MenuItem>
                                <MenuDivider/>
                            </Menu>
                        </View>

                        {/* IndexFile */}

                        <InputText
                            label={'Je choisi un pseudo'}
                            placeholder="Pseudo"
                            onChangeText={(val) => setData({...data, username: val})}
                            // onBlur={handleBlur('email')}
                            value={data.username}
                        />

                        <Text type={messageType} style={MsgBox}>
                            {message}
                        </Text>

                        {!isSubmitting && (
                            <TouchableOpacity style={StyledButton} onPress={handleSubmit}>
                                <Text style={ButtonText}>Profil terminé</Text>
                            </TouchableOpacity>
                        )}

                        {isSubmitting && (
                            <TouchableOpacity style={StyledButton} disabled={true}>
                                <ActivityIndicator size="large" color={secondary}/>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </KeyboardAvoidingWrapper>
    );
};

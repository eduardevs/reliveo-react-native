import {SignupScreen} from '../../screens/Signup/SignupScreen';
import {AuthContext} from '../../context/AuthContext';
import {useContext, useEffect, useState} from 'react';
import useRegister from '../../utils/hooks/useRegister';
import {ProfileSignupScreen} from '../../screens/Signup/ProfileSignupScreen';
import {firebase} from "../../../firebaseConfig";
import {Camera} from "expo-camera";
import {Audio} from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

export const InscriptionContainer = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const [isSubmitting, setIsSubmitting] = useState();
    const [showProfileCustomization, setShowProfileCustomization] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState();

    const registerHook = useRegister();

    const {signup} = useContext(AuthContext);


    const [image, setImage] = useState()
    const [urlImage, seturlImage] = useState()

    const uploadPicture = async () => {
        const response = await fetch(image);
        const blob = await response.blob();
        console.log(image);
        const filename = `photoProfil/photo${image.slice(-40, -4)}`;
        const ref = firebase.storage().ref().child(filename).put(blob);
        ref.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
            },
            (error) => {
                console.log(error);
                return;
            },
            () => {
                ref.snapshot.ref.getDownloadURL().then((url) => {
                    console.log('download url : ' + url);
                    blob.close();
                    seturlImage({
                        photo: url
                    })
                    return;
                });
            },
        );
    };
    //Envoie de la data une fois que l'image est envoyé dans firebase
    useEffect(() => {
        if (urlImage) {
            const superData = {
                ...data,
                ...urlImage
            }
            // FAKE API DOESNT NEED THIS DATA, ONLY DUMMY STUFF
            registerHook(superData).then((data) => data && data);
            setIsSubmitting(true);
            navigation.navigate('Login');
        }
    }, [urlImage])


    // RELIVEO API
    const [data, setData] = useState({
        email: '',
        username: '',
        password: '',
        //pseudo: '' ??
    });

    const handleTextChange = (val) => {
        setData({
            ...data,
            // RELIVEO API
            username: val,
            // TEST API
            // name: val,
        });
    };

    const handleEmailChange = (val) => {
        setData({
            ...data,
            email: val,
        });
    };

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    };

    const handleConfirmPasswordChange = (val) => {
        setConfirmPassword(val); // TEST API
    };

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    };

    const handlePreSubmit = () => {
        // if (data.name == '' || data.email == '' || data.password == '' || data.confirmPassword == '')
        if (data.name == '' || data.email == '' || data.password == '' || confirmPassword == '') {
            handleMessage('Please fill all the fields');

            setIsSubmitting(false);
        } else if (data.password !== confirmPassword) {
            handleMessage('Password do not match');
            setIsSubmitting(false);
        } else {
            // console.log(data);
            setIsSubmitting(true);
            setShowProfileCustomization(true);
        }
    };

    const handleSubmit = async () => {
        if (data.username === '') {
            handleMessage('Veuillez choisir un pseudo');
            setIsSubmitting(false);
        } else {
            await uploadPicture()
        }
    };
    return showProfileCustomization ? (
        <ProfileSignupScreen data={data} setData={setData} message={message} handleSubmit={handleSubmit}
                             setImage={setImage} image={image}/>
    ) : (
        <SignupScreen
            navigation={navigation}
            setHidePassword={setHidePassword}
            hidePassword={hidePassword}
            message={message}
            setMessage={setMessage}
            setMessageType={setMessageType}
            messageType={messageType}
            setIsSubmitting={setIsSubmitting}
            isSubmitting={isSubmitting}
            setData={setData}
            data={data}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handlePreSubmit={handlePreSubmit}
            handlePasswordChange={handlePasswordChange}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
            handleEmailChange={handleEmailChange}
            handleTextChange={handleTextChange}
        />
    );
};

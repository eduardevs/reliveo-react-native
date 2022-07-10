import { ProfileScreen } from '../../screens/Profile/profileScreen';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import useGetEventsList from '../../utils/hooks/useGetEventList';

export const ProfileContainer = ({ navigation }) => {
    
    const { userInfo } = useContext(AuthContext);
    const { eventInfo, event } = useContext(AuthContext);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [followers, setFollowers] = useState();
    const [photo, setPhoto] = useState();
    const [eventName, setEventName] = useState()

    // const eventsHook = 
    // useEffect(() => {
    //     console.log(eventInfo)
    //     useGetEventsList().then((res) => event(res))
        
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    // }, [])

    // useEffect(() => {

    //     if (eventInfo) {
    //         const data = eventInfo;
    //         if (data) {
    //             setEventName(data);
    //         }
    //     }
    // }, [eventInfo]);

    useEffect(() => {
        if (userInfo) {
            const data = userInfo;
            if (data) {
                setUsername(data.username);
                setEmail(data.email);
                setPhoto(data.photo)
            }
        }
    }, [userInfo]);


    const profileProps = {
        userProps: {
            username,
            email, // -> username
            //followers
            photo,
        },
        navProps: {
            navigation,
        },
        eventProps:{
            // eventName,
            navigation,
        }
    };

    return <ProfileScreen {...profileProps} />;
};

import React, {createContext, useState, useEffect} from 'react';

export const SyncEventContext = createContext();

export const SyncEventProvider = ({ children }) => {
    const [id, setid] = useState(85)
    const [dateEnd, setdateEnd] = useState()
    const [dateStart, setdateStart] = useState()
    const [description, setdescription] = useState()
    const [latitude, setlatitude] = useState()
    const [longitude, setlongitude] = useState()
    const [name, setname] = useState()
    const [banner, setbanner] = useState()
    const [photo, setphoto] = useState()
    const [posts, setposts] = useState()
    const [qrcode, setqrcode] = useState()
    const [codepostal, setcodepostal] = useState()
    const [rue, setrue] = useState()
    const [ville, setville] = useState()
    const [scenes, setscenes] = useState()
    const [streamer, setstreamer] = useState()

    const [userSynchro, setuserSynchro] = useState(false)


    const setEventContext = (data) => {
        setid(data.id)
        setdateEnd(data.dateEnd)
        setdateStart(data.dateStart)
        setdescription(data.description)
        setlatitude(data.latitude)
        setlongitude(data.longitude)
        setname(data.name)
        setphoto(data.photo)
        setbanner(data.banner)
        setposts(data.posts)
        setqrcode(data.qrcode)
        setcodepostal(data.codepostal)
        setrue(data.rue)
        setville(data.ville)
        setscenes(data.scenes)
        setstreamer(data.streamer)
    }

    const synchronisation = (value) => {
      setuserSynchro(value)
    }

    const valuesProps = {
        setEventContext,
        id,
        dateStart,
        dateEnd,
        description,
        latitude,
        longitude,
        name,
        photo,
        banner,
        posts,
        qrcode,
        codepostal,
        rue,
        ville,
        scenes,
        streamer,

        synchronisation,
        userSynchro
    };

    return <SyncEventContext.Provider value={valuesProps}>{children}</SyncEventContext.Provider>;
};

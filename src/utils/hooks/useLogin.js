import { useState } from 'react';
import axios from '../axios';

export default function useLogin() {
    // const [useInfo, setUserInfo] = useState(undefined);

    return (email, password) => {
        return axios
            .post('/user/signin/', {
                email,
                password,
            })
            .then((res) => res.data.token ?? null)
            .catch((error) => console.log(error));
    };

    // return [userInfo, ];
}

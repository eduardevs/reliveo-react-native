import { useState } from 'react';
import axios from '../axios';

export default function useLogin() {
    // console.log('hook go');
    return (email, password) => {
        return (
            axios
                .post('/user/signin/', {
                    email,
                    password,
                })
                // .then((res) => res.data.token ?? null)
                .then((res) => res.data ?? null)
                .catch((error) => console.log(error))
        );
    };
}

import axios from 'axios';
import { BASE_URL_TEST } from './config';

const instance = axios.create({
    // baseURL: 'https://reliveoapi.com',
    // withCredentials: true,
    baseURL: BASE_URL_TEST,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default instance;

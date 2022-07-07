import axios from 'axios';
import { BASE_URL_TEST } from './config';

const instance = axios.create({
    baseURL: 'https://limitless-cove-87023.herokuapp.com',
    // baseURL: 'https://reliveoapi.com',
    // withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json',
    //     // Accept: 'application/json',
    // },
});

export default instance;

import axios from 'axios';
// export const BASE_URL_TEST_SIGNIN = 'https://limitless-cove-87023.herokuapp.com/user/signin/';

const instance = axios.create({
    // baseURL: 'https://reliveoapi.com',
    withCredentials: true,
    // headers: {
    //     ContentType: 'application/json',
    //     Accept: 'application/json',
    //     // ''
    // },
    baseURL: 'https://limitless-cove-87023.herokuapp.com',
});

export default instance;

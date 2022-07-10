import axiosInstance from '../axios';

export default function checkToken() {
    return (email, password) => {
        return (
            axiosInstance
                .post('/authentication_token', {
                    email,
                    password,
                })
                // .then((res) => res.data.token ?? null)
                .then((res) => res.data.token)
                // .then((res) => console.log(res))
                .catch((error) => console.log(error))
        );
    };
}

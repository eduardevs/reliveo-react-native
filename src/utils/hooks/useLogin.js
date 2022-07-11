import axiosInstance from '../axios';

export default function useLogin() {
    return (email, password) => {
        return (
            axiosInstance
                .post('/authentication_token', {
                    email,
                    password,
                })
                // .then((res) => res.data.token ?? null)
                .then((res) => res.data)
                // .then((res) => console.log(res))
        );
    };
}

import axiosInstance from '../axios';

export default function useLogin() {
    return (email, password) => {
        return (
            axiosInstance
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
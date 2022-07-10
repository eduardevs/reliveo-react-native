import axiosInstance from '../axios';

export default function useLogin() {
    return (email, password) => {
<<<<<<< HEAD
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
=======
        return axiosInstance
            .post('/authentication_token', {
                email,
                password,
            })
            .then((res) => res.data ?? null)
            .catch((error) => console.log(error));
>>>>>>> de5d7c6 (    - Add function to compare exp time token)
    };
}

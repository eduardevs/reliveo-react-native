import axiosInstance from '../axios';

export default function useRegister() {
    return (data) => {
        return (
            axiosInstance
                .post('/user/signup/', data)
                // .then((res) => res.data.token ?? null)
                .then((res) => res.data ?? null)
                .catch((error) => console.log(error))
        );
    };
}

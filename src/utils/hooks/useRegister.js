import axiosInstance from '../axios';

export default function useRegister() {
    return (data) => {
        return (
            axiosInstance
                .post('/api/users', data)
                // .then((res) => res.data.token ?? null)
                .then((res) => res.data ?? null)
                // .then((res) => console.log(res))
                .catch((error) => console.log(error))
        );
    };
}

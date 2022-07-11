import axiosInstance from '../axios';

export default function useUpdateProfileName() {
    return (username, id) => {
        return (
            axiosInstance
                .put('/api/users/8', {
                    'username': username
                })
                // .then((res) => res.data.token ?? null)
                .then((res) => res.data)
                // .then((res) => console.log(res))
                .catch((err) => console.log(err))
        );
    };
}

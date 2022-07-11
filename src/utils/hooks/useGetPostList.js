import axiosInstance from '../axios';
import axios from 'axios'

export default function useGetPostsList() {
        return (
            axiosInstance
                .get('/api/posts')
                .then((res) => res.data)
                .catch((error) => console.log(error))
        )
}


import axiosInstance from '../axios';
import axios from 'axios'

export default function useGetEventsList() {
        return (
            axiosInstance
                .get('/api/events')
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
        )
}


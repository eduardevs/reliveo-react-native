import axiosInstance from '../axios';
import axios from 'axios'

export default function useGetEventsList() {
    return (data) => {
        console.log('fdp')
        return (
            axios
                .get('http://reliveoapi.com/api/events/', data)
                .then((res) => res.data ?? null)
                .catch((error) => console.log(error))
        )}
}

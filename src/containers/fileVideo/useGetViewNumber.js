import axios from "axios";

export default function useGetViewNumber() {
    return (id) => {
        return axios(`http://reliveoapi.com/api/posts/${id}`, {
            method: 'GET'
        })
            .then(res => {
                res.data.viewnumber
                console.log(res.data.viewnumber)
            })
            .catch(error => console.log(error))
    }
}
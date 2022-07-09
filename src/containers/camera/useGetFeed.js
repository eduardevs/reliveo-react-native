import axios from "axios";

export default function useGetFeed() {
    return () => {
        return axios ('http://reliveoapi.com/api/posts', {
            method: "get"
        })
            .then(res => res.data)
            .catch(error => console.log(error.message))
    }

}
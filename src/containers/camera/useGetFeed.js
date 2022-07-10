import axios from "axios";

export default function useGetFeed() {
    return () => {
        axios({
            'method': 'GET',
            'url': 'http://reliveoapi.com/api/posts'
        })
    }

}
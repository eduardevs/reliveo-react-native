import axios from "axios";

export default function useGetFeedAuthor() {
    return (data) => {
        return (
            axios(`http://reliveoapi.com${data.author}`, {
                method: 'GET'
            })
        )
    }

}
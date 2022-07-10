import axios from "axios";

export default function useGetFeedEvent() {
    return (data) => {
        return (
            axios(`http://reliveoapi.com/api/events?posts=${data.event}`, {
                method: 'GET'
            })
        )
    }

}
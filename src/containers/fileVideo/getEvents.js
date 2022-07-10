import axios from "axios";

export default function getEvents() {
    return () => {
        return (
            axios(`http://reliveoapi.com/api/events`, {
                method: 'GET'
            })
        )
    }

}
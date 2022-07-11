import axios from "axios";

export default function useUpdateViewNumber() {
    return (data, id) => {
        return axios(`http://reliveoapi.com/api/posts/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/merge-patch+json' },
            data: {
                viewnumber: Number(data)+1,
            }
        })
            // .then(data => console.log(data.data))
            .catch(error => console.log(error))
    }
}
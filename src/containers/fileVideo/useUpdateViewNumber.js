import axios from "axios";

export default function useUpdateViewNumber() {
    return (data, id) => {
        return (
            axios(`http://reliveoapi.com/api/posts/${id}`, {
                method: 'PATCH',
                contentType: 'application/merge-patch+json',
                data: {
                    viewnumber: data+1,
                }
            })
                .catch(error => console.log(error))
        )
    }

}
import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";

function useDeleteAddress(fetch, id) {
    const [result, setResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [, deleteAddress] = useAxios({
        url: '/user/costumer_information/delete',
        method: 'DELETE',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await deleteAddress({
                    data: {
                        "id": id,
                    },
                })
                setResult(response.data.status === 'success')
                setLoading(false)
            } catch (err) {
                setResult(false)
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()
    }, [fetch])

    return [loading, result]
}

export default useDeleteAddress
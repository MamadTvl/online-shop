import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";

function usePathCart(fetch, id, address, details) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [, updateBasket] = useAxios({
        url: '/basket/update_basket',
        method: 'PATCH',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await updateBasket({
                    data: {
                        "id": id,
                        "city": address.city,
                        "state": address.state,
                        "address": address.address,
                        "post_code": address.post_code,
                        "costumer_name": address.costumer_name,
                        "phone_number": address.phone_number,
                        // "email": address.email,
                        "details": details === '' ? 'بدون توضیح' : details,
                    },
                })
                setResult(response.data.data)
                setLoading(false)
            } catch (err) {
                setResult(err.response)
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()
    }, [fetch])

    return [loading, result]
}

export default usePathCart
import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";

function usePostAddress(fetch, values) {
    const [result, setResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [, createAddress] = useAxios({
        url: '/user/costumer_information/create',
        method: 'POST',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await createAddress({
                    data: {
                        "costumer_name": values.name,
                        "address": values.address,
                        "post_code": values.code,
                        "phone_number": values.mobileNumber,
                        "email": values.email,
                        "state": values.state.id,
                        "city": values.city.id
                    },
                })
                setResult(response.data.status === 'success')
                setLoading(false)

            } catch (err) {
            }
        }

        if (fetch)
            getResult().then()
    }, [fetch])

    return [loading, result]
}

export default usePostAddress
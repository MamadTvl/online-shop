import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useAddressesData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getAddresses] = useAxios({
        url: '/user/costumer_information/get',
    })

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getAddresses()
                setResult(response.data.data.costumer_information)
                setLoading(false)
            } catch (err) {
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()

    }, [fetch])

    return [loading, result]
}

export default useAddressesData
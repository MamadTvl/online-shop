import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useUserOrderData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getOrders] = useAxios({
        url: '/user/get_basket_list',
    })

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getOrders()
                setResult(response.data.data.baskets)
                setLoading(false)
            } catch (err) {
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()

    }, [fetch, getOrders])

    return [loading, result]
}

export default useUserOrderData
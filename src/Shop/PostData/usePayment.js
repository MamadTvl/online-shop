import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {useHistory} from 'react-router-dom'

function usePayment(fetch, id) {
    const history = useHistory()
    const [result, setResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [, post] = useAxios({
        url: '/payment/pay',
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await post({
                    data: {
                        "basket_id": id,
                    },
                })
                setResult(response)

            } catch (err) {
                setResult(err)
            }
            setLoading(false)
        }

        if (fetch)
            getResult().then()
    }, [fetch, id, post])

    return [loading, result]
}

export default usePayment

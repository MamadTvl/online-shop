import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";

function useApplyDiscountCode(fetch, id, discountCode) {
    const [result, setResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [, applyCode] = useAxios({
        url: '/basket/apply_discount_code',
        method: 'PATCH',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await applyCode({
                    data: {
                        "basket_id": id,
                        "discount_code": discountCode,
                    },
                })
                setResult(response.data)
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

export default useApplyDiscountCode
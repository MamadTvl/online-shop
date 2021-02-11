import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {toEnDigit} from "../../utills/ToFaDigit";

function useValidation(fetch, values) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [, validation] = useAxios({
        url: '/user/check_code',
        method: 'POST'
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await validation({
                    data: {
                        "mobile_number": toEnDigit(values.mobileNumber),
                        "code": toEnDigit(values.code)
                    },
                })
                setResult(response.data.status === 'success')
            } catch (err) {
                setResult(false)
            }
            setLoading(false)
        }

        if (fetch)
            getResult().then()
    }, [fetch, values, validation])

    return [loading, result]
}

export default useValidation

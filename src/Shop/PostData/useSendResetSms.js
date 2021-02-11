import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {toEnDigit} from "../../utills/ToFaDigit";

function useSendResetSms(fetch, mobileNumber) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [, sendResetSms] = useAxios({
        url: '/user/send_restore_code',
        method: 'POST'
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await sendResetSms({
                    data: {
                        "mobile_number": toEnDigit(mobileNumber),
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
    }, [fetch, mobileNumber])

    return [loading, result]
}

export default useSendResetSms

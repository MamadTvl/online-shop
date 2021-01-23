import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {toEnDigit} from "../../utills/ToFaDigit";

function useSendSms(fetch, mobileNumber) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [, sendSms] = useAxios({
        url: 'user/send_sms',
        method: 'POST'
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await sendSms({
                    data: {
                        "mobile_number": toEnDigit(mobileNumber),
                    },
                })
                setResult(response.data.data)
            } catch (err) {
                setResult(err.response.data.data)
            }
            setLoading(false)
        }

        if (fetch)
            getResult().then()
    }, [fetch, mobileNumber])

    return [loading, result]
}

export default useSendSms
import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {toEnDigit} from "../../utills/ToFaDigit";

function useRestorePassword(fetch, mobileNumber,values) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [, restorePassword] = useAxios({
        url: '/user/restore_password',
        method: 'PATCH'
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await restorePassword({
                    data: {
                        "mobile_number": toEnDigit(values.mobileNumber),
                        "password": toEnDigit(values.password),
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

export default useRestorePassword

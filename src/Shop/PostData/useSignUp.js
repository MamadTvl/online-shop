import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {toEnDigit} from "../../utills/ToFaDigit";

function useSignUp(fetch, values) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [, signUp] = useAxios({
        url: '/user/sign_up',
        method: 'POST'
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await signUp({
                    data: {
                        "mobile_number": toEnDigit(values.mobileNumber),
                        "name_and_last_name": values.name,
                        "state": values.state.id,
                        "city": values.city.id,
                        "email": values.email,
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
    }, [fetch, values, ])

    return [loading, result]
}

export default useSignUp
import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useUserData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getInfo] = useAxios({
        url: '/user/get_profile',
    })

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getInfo()
                setResult(response.data.data)
                setLoading(false)
                document.title =`حساب کاربری ${response.data.data.name_and_last_name}`
            } catch (err) {
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()

    }, [fetch])

    return [loading, result]
}

export default useUserData
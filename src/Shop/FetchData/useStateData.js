import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useStateData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getStates] = useAxios({
        url: '/get_state',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getStates()
                setResult(response.data.data)
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

export default useStateData
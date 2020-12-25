import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useCityData(fetch, id) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getCities] = useAxios({
        url: `get_city?id=${id}`,
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getCities()
                setResult(response.data.data.cities)
                setLoading(false)
            } catch (err) {
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()

    }, [fetch, id])

    return [loading, result]
}

export default useCityData
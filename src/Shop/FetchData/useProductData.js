import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useProductData(fetch, id) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getProduct] = useAxios({
        url: `/merchandise/get?id=${id}`,
    })

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getProduct()
                console.log(response)
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

export default useProductData
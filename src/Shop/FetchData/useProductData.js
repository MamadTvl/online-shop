import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {useHistory} from "react-router-dom"

function useProductData(fetch, id) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getProduct] = useAxios({
        url: `/merchandise/get?id=${id}`,
    })
    const history = useHistory()

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getProduct()
                setResult(response.data.data)
                setLoading(false)
                document.title = response.data.data.merchandise.title
            } catch (err) {
                history.push('/')
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()

    }, [fetch])

    return [loading, result]
}

export default useProductData
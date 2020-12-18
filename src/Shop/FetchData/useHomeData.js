import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useHomeData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getIndex] = useAxios({
        url: '/index',
    })
    // blog api

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getIndex()
                setResult([
                    response.data.data.covers,
                    response.data.data.campaigns,
                    response.data.data.top_merchandises,
                    response.data.data.amazing_offers,
                    response.data.data.mottos,
                    // todo: array of blog posts
                ])
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

export default useHomeData
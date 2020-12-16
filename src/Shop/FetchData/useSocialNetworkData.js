import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useSocialNetworkData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getSocialData] = useAxios({
        url: '/admin/setting/social_network/get'
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getSocialData()
                setResult(response.data.data.social_networks)
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

export default useSocialNetworkData
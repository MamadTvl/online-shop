import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useHomeData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getSliders] = useAxios({ //cover
        url: '/admin/setting/cover/get',
    }, {manual: true})
    const [, getBanners] = useAxios({
        url: '/admin/campaign_mng/get', //image
    }, {manual: true})
    // request for products slider(porforoush tarin)
    const [, getAmazingOffers] = useAxios({
        url: '/admin/amazing_offer_mng/get', // cover, merchandise_list
    }, {manual: true})
    const [, getAttributes] = useAxios({
        url: '/admin/setting/motto/get',
    }, {manual: true}) //mottos
    // blog api

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const slidersResponse = await getSliders()
                const bannersResponse = await getBanners()
                const amazingResponse = await getAmazingOffers()
                const attributesResponse = await getAttributes()
                setResult([
                    slidersResponse.data.data.covers,
                    bannersResponse.data.data.campaigns,
                    amazingResponse.data.data,
                    attributesResponse.data.data.mottos,
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
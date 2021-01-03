import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {useHistory, useLocation} from "react-router-dom"
import {SmoothVerticalScrolling} from "../../utills/smoothScroll";


function useMaxPriceData(fetch, search, catsLength, showCampaign) {
    const location = useLocation()
    const history = useHistory()
    const changeUrl = (search) => {
        let newSearch = search
        if (!showCampaign) {
            const queryParams = new URLSearchParams(location.search)
            if (queryParams.has('campaign_id')) {
                const id = queryParams.get('campaign_id')
                newSearch = newSearch.replace(`campaign_id=${id}`, '')
            }
            if (search === '') {
                newSearch += '?'
            }
            for (let i = 0; i < catsLength; i++) {
                newSearch = newSearch.replace(`[${i}]`, '')
            }
        }

        return newSearch
    }
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(true)
    const [, getProducts] = useAxios({
        url: `/merchandise/get_all${changeUrl(search)}`,
    })

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getProducts()
                setResult(response.data.data.max_price)
                setLoading(false)
            } catch (err) {
                if (err.response) {
                    history.push({pathname: '/search', state: {showCampaign: false}})
                }

            }
            SmoothVerticalScrolling(document.body, 500, "top")
        }

        if (fetch)
            getResult().then()

    }, [fetch, search, showCampaign, getProducts, history])

    return [loading, result]
}

export default useMaxPriceData
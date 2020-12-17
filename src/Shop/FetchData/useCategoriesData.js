import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useCategoriesData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getCategories] = useAxios({
        url: '/get_all_category',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getCategories()
                const responseCats = response.data.data.categories
                let categories = []
                for (let i = 0; i < responseCats.length; i++) {
                    categories.push({...responseCats[i], checked: false})
                }
                setResult(categories)
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

export default useCategoriesData
import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";

function useLikingComment(fetch, id, status) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(false)
    const [, liking] = useAxios({
        url: '/liking',
        method: 'POST',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await liking({
                    data: {
                        "like": status.like,
                        "dislike": status.dislike,
                        "comment_id": id
                    },
                })
                setResult(response.data.data)
                setLoading(false)
            } catch (err) {
                setResult(null)
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()
    }, [fetch])

    return [loading, result]
}

export default useLikingComment
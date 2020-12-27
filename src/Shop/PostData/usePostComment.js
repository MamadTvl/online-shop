import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";

function usePostComment(fetch, id, input) {
    const [result, setResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [, createComment] = useAxios({
        url: '/create_comment',
        method: 'POST',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await createComment({
                    data: {
                        "text": input,
                        "merchandise": id
                    },
                })
                setResult(response.data.status === 'success')
                setLoading(false)

            } catch (err) {
                setResult(false)
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()
    }, [fetch])

    return [loading, result]
}

export default usePostComment
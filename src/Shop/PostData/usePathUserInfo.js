import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {useHistory} from 'react-router-dom'

function usePathUserInfo(fetch, id, values) {
    const history = useHistory()
    const [result, setResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [, updateInfo] = useAxios({
        url: '/user/update_profile',
        method: 'PATCH',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await updateInfo({
                    data: {
                        "id": id,
                        "name_and_last_name": values.name,
                        "email": values.email,
                        "state": values.state.id,
                        "city": values.city.id,
                    },
                })
                    setResult(response.data.status === 'success')
                    setLoading(false)
                if(response.data.status === 'success'){
                    history.push('/profile')
                }

            } catch (err) {
            }
        }
        if(fetch)
            getResult().then()
    }, [fetch])

    return [loading, result]
}

export default usePathUserInfo
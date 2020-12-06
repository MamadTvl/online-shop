import useAxios from "axios-hooks";
const TOKEN_KEY = "Authorization";
const baseUrl = "https://api.didartshop.ir"


export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const IsLogin = () => {
    const [{data, loading, error, response}, fetch] = useAxios(
        {
            url: `${baseUrl}/user/get_profile`,
            headers: {"Authorization": localStorage.getItem(TOKEN_KEY)}
        }
    )
    if (!loading) {
        document.getElementById('root').hidden = false
        if (response !== undefined)
            return response.status === 200
        else return false
    } else {
        document.getElementById('root').hidden = true
    }
}
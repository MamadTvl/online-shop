const TOKEN_KEY = "Authorization";


export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

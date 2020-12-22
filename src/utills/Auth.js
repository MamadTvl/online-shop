import React, {createContext, useContext} from "react";
import useLogin from "./Hooks/useLogin";

const authContext = createContext(null);

export function useProvideAuth() {
    const [isLogin, loading] = useLogin(true)

    return {
        loading: loading,
        isLogin: isLogin,
    }

}

export default function ProvideAuth({children}) {
    const auth = useProvideAuth();
    console.log(auth)
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}
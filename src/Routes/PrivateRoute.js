import React from "react";
import {Redirect, Route} from "react-router-dom";
import useLogin from "../utills/Hooks/useLogin";

function PrivateRoute(props) {
    const [isLogin, loading] = useLogin(true)

    if (loading)
        return null

    return (
        isLogin ?
            (props.children)
            :
            <Route>
                <Redirect to={'/profile/login'}/>
            </Route>
    )
}

export default PrivateRoute
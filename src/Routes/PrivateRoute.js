import React from "react";
import {Redirect, Route} from "react-router-dom";
import useLogin from "../utills/Hooks/useLogin";

function PrivateRoute(props) {
    const [isLogin, loading] = useLogin(true)
    window.scrollTo(0, 0)
    if (loading)
        return null

    return (
        <Route exact path={props.path}>
            {
                isLogin
                    ? props.children
                    : <Redirect push to={'/login'}/>
            }
        </Route>

    )
}

export default PrivateRoute
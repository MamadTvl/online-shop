import React from "react";
import {Redirect, Route} from "react-router-dom";
import useLogin from "../utills/Hooks/useLogin";

function PrivateRoute(props) {
    const [isLogin, loading] = useLogin(true)
    document.getElementById('root').hidden = loading;
    if(loading)
        return null
    return (
        <Route exact path={props.path}>
            {
                isLogin
                    ? props.children
                    : <Redirect to={'/login'}/>
            }
        </Route>

    )
}

export default PrivateRoute
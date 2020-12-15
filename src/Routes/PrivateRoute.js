import React from "react";
import {Redirect, Route} from "react-router-dom";
import useLogin from "../utills/Hooks/useLogin";

function PrivateRoute(props) {
    const [isLogin, loading] = useLogin(true)
    console.log(loading)
    if (loading)
        return null

    return (
        isLogin ?
            <Route exact path={props.path}>
                {props.children}
            </Route>
            :
            <Redirect push to={'/profile/login'}/>

    )
}

export default PrivateRoute
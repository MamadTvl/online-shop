import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../utills/Auth";

function PrivateRoute(props) {
    const auth = useAuth()
    document.getElementById('root').hidden = auth.loading;
    if (auth.loading)
        return null
    return (
        <Route exact path={props.path}>
            {
                auth.isLogin
                    ? props.children
                    : <Redirect to={'/login'}/>
            }
        </Route>

    )
}

export default PrivateRoute
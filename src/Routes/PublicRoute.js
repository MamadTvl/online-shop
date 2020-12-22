import React from "react";
import {Redirect, Route} from 'react-router-dom';
import {useAuth} from "../utills/Auth";

function PublicRoute(props) {
    const auth = useAuth()
    console.log(auth)
    document.getElementById('root').hidden = auth.loading;
    if (auth.loading)
        return null
    return (
        <Route exact path={props.path}>
            {
                auth.isLogin ?
                    <Redirect to="/profile"/>
                    :
                    props.children
            }
        </Route>
    )
}

export default PublicRoute
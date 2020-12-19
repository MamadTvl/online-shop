import React from "react";
import {Redirect, Route} from 'react-router-dom';
import useLogin from '../utills/Hooks/useLogin'

function PublicRoute(props) {
    const [isLogin, loading] = useLogin(true)
    if (loading)
        return null

    return (
        <Route exact path={props.path}>
            {
                isLogin ?
                    <Redirect to="/profile"/>
                    :
                    props.children
            }
        </Route>
    )
}

export default PublicRoute
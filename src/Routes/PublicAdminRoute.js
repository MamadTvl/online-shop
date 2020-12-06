import React from "react";
import { Route, Redirect } from 'react-router-dom';
import {IsLogin} from '../utills'

function PublicAdminRoute(props) {
    return (
        <Route exact path={props.path}>
            {
                IsLogin() ? <Redirect to="/admin/dashboard"/>
                : props.children
            }
        </Route>
    )
}

export default PublicAdminRoute
import React from "react";
import {Redirect, Route} from "react-router-dom";
import DashboardLayout from "../DashboardForms/DashboardLayout";
import {IsLogin} from '../utills'

function PrivateAdminRoute(props) {
    return (
        IsLogin() ?
            <DashboardLayout>
                <Route path={'/admin/dashboard'}>
                    {props.children}
                </Route>
            </DashboardLayout>
            : <Route><Redirect to={'/admin/login'}/></Route>
    )

}

export default PrivateAdminRoute
import React from "react";
import {Route} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginPage from "../Shop/Pages/LoginPage";

function ProfileRoutes() {
    return (
        <>
            <PrivateRoute>
                <Route exact path={'/profile'}/>
                <Route exact path={'/profile/personal-info'}/>
                <Route exact path={'/profile/add-address'}/>
                <Route exact path={'/profile/cart'}/>
                <Route exact path={'/profile/order'}/>
            </PrivateRoute>

            <PublicRoute path={`/profile/login`}>
                <LoginPage/>
            </PublicRoute>
            <PublicRoute path={`/profile/signup`}>
                <div>
                    signup
                </div>
            </PublicRoute>
            <PublicRoute path={`/profile/forget-password`}>
                <div>
                    forget password
                </div>
            </PublicRoute>
        </>
    )
}

export default ProfileRoutes
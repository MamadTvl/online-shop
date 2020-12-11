import React from "react";
import {Route} from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function ProfileRoutes() {
    return (
        <>
            <PrivateRoute>
                <Route exact path={'/profile'}>
                    <div>
                        profile
                    </div>
                </Route>
                <Route exact path={'/profile/personal-info'}/>
                <Route exact path={'/profile/add-address'}/>
                <Route exact path={'/profile/cart'}/>
                <Route exact path={'/profile/order'}/>
            </PrivateRoute>

            <PublicRoute path={`/profile/login`}>
                <div>
                    login
                </div>
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
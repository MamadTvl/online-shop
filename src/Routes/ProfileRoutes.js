import React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginPage from "../Shop/Pages/LoginPage";
import SignUpPage from "../Shop/Pages/SignUpPage";
import ForgetPassPage from "../Shop/Pages/ForgetPassPage";

function ProfileRoutes() {
    return (
        <>
            <PrivateRoute path={'/profile'}>
                <div>
                    here
                </div>
            </PrivateRoute>
            <PrivateRoute path={'/profile/personal-info'}>
                <div>
                    kadl
                </div>
            </PrivateRoute>
            <PrivateRoute path={'/profile/add-address'}>
                <div>
                    kadl
                </div>
            </PrivateRoute>
            <PrivateRoute path={'/profile/cart'}>
                <div>
                    kadl
                </div>
            </PrivateRoute>

            <PrivateRoute path={'/profile/order'}>
                <div>
                    kadl
                </div>
            </PrivateRoute>


            <PublicRoute path={`/profile/login`}>
                <LoginPage/>
            </PublicRoute>
            <PublicRoute path={`/profile/signup`}>
                <SignUpPage/>
            </PublicRoute>
            <PublicRoute path={`/profile/forget-password`}>
                <ForgetPassPage/>
            </PublicRoute>
        </>
    )
}

export default ProfileRoutes
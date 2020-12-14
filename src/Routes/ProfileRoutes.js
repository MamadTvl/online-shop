import React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginPage from "../Shop/Pages/LoginPage";
import SignUpPage from "../Shop/Pages/SignUpPage";
import ForgetPassPage from "../Shop/Pages/ForgetPassPage";
import ProfilePage from "../Shop/Pages/ProfilePage";

function ProfileRoutes() {
    return (
        <>
            <PrivateRoute path={'/profile'}>
                <ProfilePage/>
            </PrivateRoute>
            <PrivateRoute path={'/profile/personal-info'}>
                <div>
                    kadl
                </div>
            </PrivateRoute>
            <PrivateRoute path={'/profile/addresses'}>
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
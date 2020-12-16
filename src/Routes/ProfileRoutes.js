import React from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginPage from "../Shop/Pages/LoginPage";
import SignUpPage from "../Shop/Pages/SignUpPage";
import ForgetPassPage from "../Shop/Pages/ForgetPassPage";
import ProfilePage from "../Shop/Pages/ProfilePage";
import UserInfoPage from "../Shop/Pages/UserInfoPage";
import AddressesPage from "../Shop/Pages/AddressesPage";
import CartPage from "../Shop/Pages/CartPage";

function ProfileRoutes() {
    return (
        <>
            <PrivateRoute path={'/profile'}>
                <ProfilePage/>
            </PrivateRoute>
            <PrivateRoute path={'/profile/personal-info'}>
                <UserInfoPage/>
            </PrivateRoute>
            <PrivateRoute path={'/profile/addresses'}>
                <AddressesPage/>
            </PrivateRoute>
            <PrivateRoute path={'/profile/cart'}>
                <CartPage/>
            </PrivateRoute>

            <PublicRoute path={`/login`}>
                <LoginPage/>
            </PublicRoute>
            <PublicRoute path={`/signup`}>
                <SignUpPage/>
            </PublicRoute>
            <PublicRoute path={`/profile/forget-password`}>
                <ForgetPassPage/>
            </PublicRoute>
        </>
    )
}

export default ProfileRoutes
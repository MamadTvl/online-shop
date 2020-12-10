import React from "react";
import {Route, Switch} from 'react-router-dom';
import HomePage from "../Shop/Pages/HomePage";

function ShopRoutes(props) {

    return (
        <Switch>
            <Route exact path={'/'}>
                <HomePage/>
            </Route>
            <Route exact path={'/products/:productID'}/>
            <Route exact path={'/search'}/>
            <Route exact path={'/profile'}/>
            <Route exact path={'/profile/login'}/>
            <Route exact path={'/profile/signup'}/>
            <Route exact path={'/profile/forget-password'}/>
            <Route exact path={'/profile/personal-info'}/>
            <Route exact path={'/profile/add-address'}/>
            <Route exact path={'/profile/cart'}/>
            <Route exact path={'/profile/order'}/>
        </Switch>
    )
}

export default ShopRoutes
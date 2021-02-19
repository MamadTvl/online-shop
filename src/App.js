import React, {useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./Shop/Pages/HomePage";
import SearchPage from "./Shop/Pages/SearchPage";
import ProductPage from "./Shop/Pages/ProductPage";
import ShopLayout from "./Shop/Layouts/ShopLayout";
import ProvideAuth from "./utills/Auth";
import PrivateRoute from "./Routes/PrivateRoute";
import ProfilePage from "./Shop/Pages/ProfilePage";
import UserInfoPage from "./Shop/Pages/UserInfoPage";
import AddressesPage from "./Shop/Pages/AddressesPage";
import CartPage from "./Shop/Pages/CartPage";
import PublicRoute from "./Routes/PublicRoute";
import LoginPage from "./Shop/Pages/LoginPage";
import SignUpPage from "./Shop/Pages/SignUpPage";
import ForgetPassPage from "./Shop/Pages/ForgetPassPage";
import PaymentPage from "./Shop/Pages/Paymentpage";
import AboutUsPage from "./Shop/Pages/AboutUsPage";
import {theme} from "./Theme";

function App() {
    const [basketChange, setBasketChange] = useState(0)


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ProvideAuth>
                <Router>
                    <ShopLayout basketChange={basketChange}>
                        <Switch>
                            <Route exact path={'/'} component={HomePage}/>

                            <Route exact path={'/search'} component={SearchPage}/>

                            <Route exact path={'/products/:code/:product/:id'}>
                                <ProductPage setBasketChange={setBasketChange}/>
                            </Route>

                            <Route exact path={'/about-us'}>
                                <AboutUsPage/>
                            </Route>

                            <PublicRoute path={`/login`}>
                                <LoginPage/>
                            </PublicRoute>

                            <PublicRoute path={`/signup`}>
                                <SignUpPage/>
                            </PublicRoute>

                            <PublicRoute path={`/forget-password`}>
                                <ForgetPassPage/>
                            </PublicRoute>

                            <PrivateRoute path={'/payment/status'}>
                                <PaymentPage/>
                            </PrivateRoute>

                            <Route path={'/profile'}>
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
                                    <CartPage setBasketChange={setBasketChange}/>
                                </PrivateRoute>
                            </Route>
                            <Redirect to={'/'}/>
                        </Switch>
                    </ShopLayout>
                </Router>
            </ProvideAuth>
        </ThemeProvider>
    );
}

export default App;

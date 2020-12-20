import React, {useEffect, useState} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter as Router, Redirect, Route, Switch, useLocation, useHistory} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./Shop/Pages/HomePage";
import SearchPage from "./Shop/Pages/SearchPage";
import ProductPage from "./Shop/Pages/ProductPage";
import ProfileRoutes from './Routes/ProfileRoutes'
import ShopLayout from "./Shop/Layouts/ShopLayout";

function App() {
    const [basketChange, setBasketChange] = useState(0)
    const rtlTheme = createMuiTheme({
        direction: 'rtl'
    })


    return (
        <ThemeProvider theme={rtlTheme}>
            <CssBaseline/>
            <Router>
                <Switch>
                    <ShopLayout basketChange={basketChange}>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route exact path={'/search'} component={SearchPage}/>
                        <Route exact path={'/products/:code/:product'}>
                            <ProductPage setBasketChange={setBasketChange}/>
                        </Route>
                        <ProfileRoutes/>
                    </ShopLayout>

                    {/*<Redirect to={'/'}/>*/}
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;

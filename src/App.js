import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"; //todo : warning for useHistory change BrowserRouter to Router
import {createBrowserHistory} from "history";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./Shop/Pages/HomePage";
import SearchPage from "./Shop/Pages/SearchPage";
import ProductPage from "./Shop/Pages/ProductPage";


function App() {

    const customHistory = createBrowserHistory();

    const rtlTheme = createMuiTheme({
        direction: 'rtl'
    })

    return (
        <ThemeProvider theme={rtlTheme}>
            <CssBaseline/>
            <Router history={customHistory}>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route exact path={'/search'} component={SearchPage}/>
                    <Route exact path={'/products/:code/:product'} component={ProductPage}/>
                    <Route exact path={'/profile'}/>
                    <Route exact path={'/profile/login'}/>
                    <Route exact path={'/profile/signup'}/>
                    <Route exact path={'/profile/forget-password'}/>
                    <Route exact path={'/profile/personal-info'}/>
                    <Route exact path={'/profile/add-address'}/>
                    <Route exact path={'/profile/cart'}/>
                    <Route exact path={'/profile/order'}/>
                    <Route exact path={'/not-found'}>
                        <div>
                            صفحه ای که دنبال آن بودید پیدا نشد
                        </div>
                    </Route>
                    <Redirect to={'/not-found'}/>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;

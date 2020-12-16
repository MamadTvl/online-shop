import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"; //todo : warning for useHistory change BrowserRouter to Router
import {createBrowserHistory} from "history";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./Shop/Pages/HomePage";
import SearchPage from "./Shop/Pages/SearchPage";
import ProductPage from "./Shop/Pages/ProductPage";
import ProfileRoutes from './Routes/ProfileRoutes'
import ShopLayout from "./Shop/Layouts/ShopLayout";

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
                    <ShopLayout>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route exact path={'/search'} component={SearchPage}/>
                        <Route exact path={'/products/:code/:product'} component={ProductPage}/>
                        {/*<Route exact path={'/profile'} >*/}
                        <ProfileRoutes/>
                    </ShopLayout>
                    {/*</Route>*/}
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

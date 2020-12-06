import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"; //todo : warning for useHistory change BrowserRouter to Router
import {createBrowserHistory} from "history";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./Shop/Components/Pages/HomePage";
import Search from "./Shop/Components/Search/Search";


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
                    <Route exact path={'/search'} component={Search}/>
                    <Route exact path={'/products/:productID'}/>
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

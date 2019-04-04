import React, {Component} from "react";
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* COMPONENTS START */
import App from './../App';
/* COMPONENTS END */

const  RouterCustom= ()=> {
    const store = configureStore;
    return (<Provider store={store}>
        <Router  >
            <MuiThemeProvider>
                <Switch>
                    <Route  path="/" component={App} />
                </Switch>
            </MuiThemeProvider>
        </Router>
    </Provider>);
};

export default RouterCustom;
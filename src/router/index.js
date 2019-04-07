import React, {useEffect} from "react";
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from '../store/configure-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* COMPONENTS START */
import App from './../App';
import ErrorPage from "./../components/ErrorPage";
/* COMPONENTS END */

const  RouterCustom= ()=> {
    const store = configureStore;
    return (
        <Provider store={store}>
            <MuiThemeProvider>
                <Router >

                        <App  />

                </Router>
            </MuiThemeProvider>
        </Provider>
    );
};

export default RouterCustom;
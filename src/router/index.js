import React, {useEffect} from "react";
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* COMPONENTS START */
import App from './../App';
import ErrorPage from "./../components/ErrorPage";
/* COMPONENTS END */
import { StoreProvider } from './../context/StoreContext.js';

const  RouterCustom= ()=> {
    return (
                <MuiThemeProvider>
                    <Router >
                        <StoreProvider>
                            <App />
                        </StoreProvider>
                    </Router>
                </MuiThemeProvider>
    );
};

export default RouterCustom;
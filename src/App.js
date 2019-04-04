import React, {Component} from "react";
import { BrowserRouter as Router , Route } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* COMPONENTS START */
import MarketList from './components/MarketList';
/* COMPONENTS END */

const  App= ()=> {
 return (
    <Router>
      <Route  path="/" render={ props => <h1>!!!!</h1> }/>
          <Route  path="/" render={ props => <MarketList {...props}/>} />
    </Router>
  );
};

export default App;

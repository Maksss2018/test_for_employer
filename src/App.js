import React, {Component} from "react";
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* COMPONENTS START */
import MarketList from './components/MarketList';
/* COMPONENTS END */

/*
import CvComponentMain from './components/cv_main/CvComponentMain';
import EducationComponentMain from './components/ed_main/EducationComponentMain';
import EducationComponentLessons from './components/ed_lessons_container/EducationComponentLessons';
*/
const  App= ()=> {
  const store = configureStore;
  return (<Provider store={store}>
    <Router  >
      <MuiThemeProvider>
        <Switch>
          <Route exact path="/" render={ props => <MarketList {...props}/>} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Provider>);
};

export default App;

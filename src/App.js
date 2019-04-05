import React, { useEffect, useState} from "react";
import { BrowserRouter as Router , Route } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import {connect} from 'react-redux';
import configureStore from './store/configure-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* COMPONENTS START */
import MarketList from './components/MarketList';
import NavMenu from './components/NavMenu';
import {deleteItem, getData} from "./actions";
import {withStyles} from "@material-ui/core";
/* COMPONENTS END */

const  App = ({items,getData})=> {
    let [itemsArray,setItemsArray] = useState(null);
    useEffect(()=>{
        getData();
        setItemsArray(items)
    },[items]);
    const  HandleDeleteItem = (id) => setItemsArray(itemsArray.filter(item => item._id!==id)) ;
    const  HandleDeleteAll = (id) => setItemsArray([]) ;
    return (
        <Router>
            <Route  path="/" render={ props => <NavMenu
                deleteAll={HandleDeleteAll}
                animArr={itemsArray!==null?itemsArray.map(item =>`${item._id}-container`):[]}
                countItems={itemsArray!==null?itemsArray.length:0}
                countPrice={itemsArray!==null?itemsArray.reduce((acc,cur)=> acc+parseInt(cur.data.price),0):0} /> }/>
            <Route  path="/" render={ props => <MarketList
                deleteItem={HandleDeleteItem}
                list={itemsArray} {...props}/>} />
        </Router>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};
const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)


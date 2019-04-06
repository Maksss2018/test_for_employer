import React, { useEffect, useState} from "react";
import { BrowserRouter as Router , Route } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import {connect} from 'react-redux';
import configureStore from './store/configure-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* COMPONENTS START */
import MarketGridList from './components/MarketGridList';
import MarketList from './components/MarketList';
import NavMenu from './components/NavMenu';
import Form from './components/Form';

import {getData} from "./actions";
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
    const  HandleAddItem = newItem =>{
         if(localStorage.newList){
             let oldList =JSON.parse(localStorage.newList);
             localStorage.newList =JSON.stringify([{...newItem},...oldList]);
         }else {
             localStorage.newList =JSON.stringify([{...newItem}]);
         }
      //  setItemsArray([{...newItem} ,...itemsArray]);
    };
    return (
        <>
            <Route path="/" render={ props => <NavMenu
                deleteAll={HandleDeleteAll}
                animArr={itemsArray!==null?itemsArray.map(item =>`${item._id}-container`):[]}
                countItems={itemsArray!==null?itemsArray.length:0}
                countPrice={itemsArray!==null?itemsArray.reduce((acc,cur)=> acc+parseInt(cur.price),0):0} /> }/>
            <Route path="/form" render={ props => <Form
                deleteItem={HandleDeleteItem}
                addItem={HandleAddItem}
                {...props}
            />} />
            <Route exact  path="/" render={ props => <MarketGridList
                deleteItem={HandleDeleteItem}
                list={itemsArray} {...props}/>} />
            <Route exact  path="/form" render={ props => <MarketList
                deleteItem={HandleDeleteItem}
                 {...props}/>} />


        </>
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


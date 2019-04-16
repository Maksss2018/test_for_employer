import React, { useEffect, useState,useContext} from "react";
import {  Route, Switch} from 'react-router-dom';
/* COMPONENTS START */
import MarketGridList from './components/MarketGridList';
import ErrorPage from './components/ErrorPage';
import NavMenu from './components/NavMenu';
import Form from './components/Form';
import { StoreContext } from "./context/StoreContext"
/* COMPONENTS END */

const  App = ({location,history})=> {
    const { actions } = useContext(StoreContext);
    let {getData, getNewList} = actions;
    let [flag,setFlag]= useState(false);
    useEffect(()=>{
        getData();
    },[]);

    return (
        <>
            <Route  path="/:user?" render={ props => <NavMenu
                {...props}
            />
            }
            />
        <Switch>
            <Route exact path="/admin/form" render={ props => <Form
                {...props}
            />} />

            <Route exact  path="/:user?" render={ props => <MarketGridList
                {...props}/>}
            />
            <Route  render={ props => <ErrorPage
                {...props}/>} />

        </Switch>
            </>
    );
};


export default App


import React, { useEffect, useState} from "react";
import {  Route, Switch} from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import {connect} from 'react-redux';
/* COMPONENTS START */
import MarketGridList from './components/MarketGridList';
import MarketList from './components/MarketList';
import ErrorPage from './components/ErrorPage';
import NavMenu from './components/NavMenu';
import Form from './components/Form';

import {getData,updateList} from "./actions";
import {withStyles} from "@material-ui/core";
/* COMPONENTS END */

const  App = (props)=> {
    let {items,getData,location,history} = props;
    let [itemsArray,setItemsArray] = useState(null),
        [path,setPath] = useState(null);
    useEffect(()=>{
        getData();
        setItemsArray(items)
    },[items]);
    const  HandleDeleteItem = (id) =>{
            setItemsArray(itemsArray.filter(item => item._id!==id));
        },
        HandleDeleteAll = (id) =>{
            setItemsArray([])
        },
        HandleAddItem = newItem =>{
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
            <Route  path="/:user?" render={ props => <NavMenu
                {...props}
                deleteAll={HandleDeleteAll}
                animArr={itemsArray!==null?itemsArray.map(item =>`${item._id}-container`):[]}
                countItems={itemsArray!==null?itemsArray.length:0}
                countPrice={itemsArray!==null?itemsArray.reduce((acc,cur)=> acc+parseInt(cur.price),0):0}
            />
            }
            />
        <Switch>
            <Route exact path="/admin/form" render={ props => <Form
                deleteItem={HandleDeleteItem}
                addItem={HandleAddItem}
                {...props}
            />} />

            <Route exact  path="/:user?" render={ props => <MarketGridList
                {...props}
                deleteItem={HandleDeleteItem}
                list={itemsArray} {...props}/>} />
            <Route  render={ props => <ErrorPage
                {...props}/>} />

        </Switch>
            </>
    );
};
/*
<Route path="/admin" render={ ({location,history}) => {
                if(localStorage.user!=="admin"){
                    history.push("/");
                }
            }} />
*/
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};
const mapDispatchToProps = (dispatch) => ({
    getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)


import React, {useState, useEffect, useContext, memo} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import AttachMoney from '@material-ui/icons/AttachMoney';



import DeleteIcon from '@material-ui/icons/Delete';
import {StoreContext} from "../../context/StoreContext";
const dummyPlaceholder = "http://lorempixel.com/400/200/food";
const urlImg = "https://raw.githubusercontent.com/Maksss2018/beetroot-test/master/i/";
/*
{ "active":false,
        "info":{
            "name":"Овсяная каша с фруктами",
            "category":1,
            "img":"im1.jpg"
        },
        "data":{
            "price":25,
            "v":"грн",
            "counter":0
        }

    }
*/
const $ = (str) => document.getElementById(str);
const MarketGridList = ({classes ,match, history,location}) => {
    const {state,actions} = useContext(StoreContext),
        { deleteItem }= actions,
        {items} = state;
    let [listOfItems,setListOfItems] = useState([]);
    useEffect(()=>{
        if(items!==null){
            setListOfItems(items);
        }
    },[items]);
    useEffect(()=>{
        if(localStorage.user!=="admin"&&location.pathname.split("/")[1] === "admin"){
            history.push("/");
        }
    },[]);
    return (
        <div  className={classes.root}>
            <GridList cellHeight={280} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Our Menu:</ListSubheader>
                </GridListTile>
                {listOfItems.map( (tile)=>{
                    let {img,_id,name,price} = tile;
                    return  (
                        <GridListTile id={`${ _id}-container`} key={ _id}>
                            <img src={img!==null?`${urlImg}${img}`:dummyPlaceholder} alt={name} />
                            <GridListTileBar
                                title={ name}
                                actionIcon={
                                    <>
                                        <IconButton
                                            className={classes.icon}>
                                            {price}
                                            <AttachMoney/>
                                        </IconButton>
                                        {match.params.user === "admin" ?
                                                <IconButton className={classes.icon}>
                                                    <DeleteIcon id={ _id} onClick={e=>{
                                                        /* not real necessary and correct way (because there is should be  component like Item )
                                                          part  but I want to add  some animation here */
                                                        const trg =  $(`${ _id}-container`);
                                                        trg.classList = `${trg.classList} fadeOut animated `;
                                                        setTimeout(()=> deleteItem(_id,items),600);
                                                    }} />
                                                </IconButton>:""}
                                        </>
                                }
                            />
                        </GridListTile>
                    )
                })}
            </GridList>

        </div>
    );
};
MarketGridList.propTypes ={
    classes:PropTypes.object.isRequired,
    location:PropTypes.object.isRequired,
    match:PropTypes.object.isRequired,
    history:PropTypes.object.isRequired
};

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        paddingBottom: 50
    },
    gridList: {
        width: 1200,
        height: "auto",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


export default withStyles(styles)( memo(MarketGridList))


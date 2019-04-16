import React, {useContext, useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import ComponentMenu from "./../ComponentMenu";
import CustomTooltips from "./../CustomToolTips";


import {StoreContext} from "../../context/StoreContext";




const NavMenu = ({classes,location,match}) => {
    let {
        state
        ,actions
    } = useContext(StoreContext),
    {
        deleteItem
    } = actions,
        {
            items
        } = state;
    let [totalPrice,setTotalPrice ] = useState(0),
        [totalLength,setTotalLength ] = useState(0);
    //items!==null?items.reduce((acc,cur)=> acc+parseInt(cur.price),0):0
    useEffect(()=>{
        if(items!==null){
            console.dir(state);/*
            setTotalPrice(items.items.reduce((acc,cur)=> acc+parseInt(cur.price),0));
            setTotalLength(items.items.length);
            */
        }
    },[items]);
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CustomTooltips text={" FatFish "} >
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <img
                                style={{
                                    height:"auto",
                                    maxHeight:"100%",
                                    width:"50px",
                                    backgroundColor:"#ffffff"
                                }}
                                src={`${process.env.PUBLIC_URL }/logo.svg`}
                                alt=""/>
                        </IconButton>
                    </CustomTooltips>

                    <CustomTooltips  text={" total  number of dishes in menu "} >
                        <IconButton color="inherit">
                            <Badge badgeContent={totalLength} color="secondary">
                                <AddShoppingCart />
                            </Badge>
                        </IconButton>
                    </CustomTooltips>
                    <CustomTooltips text={" total  price of all in the  menu "} >
                        <IconButton color="inherit">
                            <Badge max={10000} badgeContent={totalPrice} color="secondary">
                                <EuroSymbol />
                            </Badge>
                        </IconButton>
                    </CustomTooltips>
                    <CustomTooltips text={" average dish price "} >
                        <IconButton color="inherit">
                            <Badge max={10000} badgeContent={totalLength!==0?Math.round(totalPrice/totalLength):0} color="secondary">
                                <LocalDiningIcon />
                            </Badge>
                        </IconButton>
                    </CustomTooltips>

                    <div className={classes.grow} />
                    <div style={{marginLeft:"auto"}} >
                        {match.params.user === "admin"? <CustomTooltips text={" delete all "} >
                            <IconButton onClick={e => deleteItem(null,false)} color="inherit">
                                <DeleteIcon />
                            </IconButton>
                        </CustomTooltips>:""}

                        <ComponentMenu location={location}  classes={classes.menuButton} />

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

NavMenu.propTypes = {

};
const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};


export default withStyles(styles)(NavMenu)

import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {  Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from "@material-ui/core";

import {StoreContext} from "../../context/StoreContext";

const ComponentMenu = ({location,history}) => {
    const { state, dispatch, actions } = useContext(StoreContext);
    let { user } = state,
        { login, logOut } = actions,
        [anchor, setAnchor] =  useState(null),
        [userStatus,setUserStatus] =useState(false);
 useEffect(()=>{
     setUserStatus(location.pathname.split("/")[1] ==="admin");
 },[location.pathname]);

    const handleClick = event => {

            setAnchor(event.currentTarget)
    },
        handleClose = () => {
            setAnchor(null);
        };

    return (
        <>
            <Button
                aria-owns={anchor ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={ handleClick}
            >
                <MenuIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={ handleClose}
            >
                <MenuItem onClick={handleClose}>
                    {
                        userStatus?<Link exect to="/admin">Our menu</Link>
                            :<Link exect to="/">Our menu </Link>
                    }

                </MenuItem>
                {userStatus?<Link  to={"/admin/form"}>
                    <MenuItem onClick={handleClose}>
                    add new item
                </MenuItem>
                    </Link>:""}
                <Link  to={userStatus?"/":"/admin"} >
                <MenuItem  onClick={e => {
                    handleClose(e);
                    localStorage.user = !userStatus?"admin":"";
                }}>
                    {userStatus? "log-out"
                        :"login"}
                </MenuItem>
                </Link>
            </Menu>
        </>
    );
};


ComponentMenu.propTypes = {

};

export default ComponentMenu;

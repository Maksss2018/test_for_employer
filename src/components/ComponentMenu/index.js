import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {  NavLink } from 'react-router-dom';
import IconButton from "../NavMenu";


import MenuIcon from '@material-ui/icons/Menu';



const ComponentMenu = (props) => {
    let [anchor, setAnchor] =  useState(null);

    const handleClick = event => {
        setAnchor(event.currentTarget);
        console.dir(event.target);
    };

    const handleClose = () => {
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
                    <NavLink exect to={"/"}>Our menu</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink  to={"/form"}>add new item</NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavLink  to={"/logout"} >Logout</NavLink>
                </MenuItem>
            </Menu>
        </>
    );
};


ComponentMenu.propTypes = {

};

export default ComponentMenu;
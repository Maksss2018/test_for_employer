import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {  Link } from 'react-router-dom';
import IconButton from "../NavMenu";

import MenuIcon from '@material-ui/icons/Menu';

const ComponentMenu = (props) => {
    let [anchor, setAnchor] =  useState(null);

    const handleClick = event => setAnchor(event.currentTarget);

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
                    <Link exect to={"/"}>Our menu</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link  to={"/form"}>add new item</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link  to={"/logout"} >Logout</Link>
                </MenuItem>
            </Menu>
        </>
    );
};


ComponentMenu.propTypes = {

};

export default ComponentMenu;
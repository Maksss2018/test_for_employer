import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {  Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";

import {login, logOut} from "../../actions"

const ComponentMenu = ({user,login, logOut,location,history}) => {
    let [anchor, setAnchor] =  useState(null),
        [userStatus,setUserStatus] = useState(false);
    useEffect(()=>{
        setUserStatus(user);
    },[location]);

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
                        location.pathname.split("/")[1] === "admin"?<Link exect to="/admin">Our menu</Link>
                            :<Link exect to="/">Our menu </Link>
                    }

                </MenuItem>
                {location.pathname ==="/admin"?<MenuItem onClick={handleClose}>
                    <Link  to={"/admin/form"}>add new item</Link>
                </MenuItem>:""}
                <MenuItem  onClick={e => {
                    handleClose(e);
                    localStorage.user = location.pathname.split("/")[1]!=="admin"?"admin":"";
                }}>
                    {location.pathname ==="/admin"?<Link  to={"/"} > log-out</Link>
                        :<Link  to={"/admin"} > login</Link>}
                </MenuItem>
            </Menu>
        </>
    );
};


ComponentMenu.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        user: Object.assign(false,state.user)
    }
};
const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(login()),
    logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentMenu)

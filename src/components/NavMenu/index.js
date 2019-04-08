import React from 'react';
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


//import {getOptions} from "../../actions";
import {connect} from "react-redux";




const NavMenu = ({classes,countItems,countPrice,deleteAll,location,match}) => {

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
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
                    <Typography style={{
                        marginLeft:"2rem"
                    }} className={classes.title} variant="h6" color="inherit" noWrap>
                        FatFish
                    </Typography>

                    <CustomTooltips text={" total  number of dishes in menu "} >
                        <IconButton color="inherit">
                            <Badge badgeContent={countItems} color="secondary">
                                <AddShoppingCart />
                            </Badge>
                        </IconButton>
                    </CustomTooltips>
                    <CustomTooltips text={" total  price of all in the  menu "} >
                        <IconButton color="inherit">
                            <Badge max={10000} badgeContent={countPrice} color="secondary">
                                <EuroSymbol />
                            </Badge>
                        </IconButton>
                    </CustomTooltips>
                    <CustomTooltips text={" average dish price "} >
                        <IconButton color="inherit">
                            <Badge max={10000} badgeContent={countItems!==0?Math.round(countPrice/countItems):0} color="secondary">
                                <LocalDiningIcon />
                            </Badge>
                        </IconButton>
                    </CustomTooltips>

                    <div className={classes.grow} />
                    <div style={{marginLeft:"auto"}} >
                        {match.params.user === "admin"? <CustomTooltips text={" total  number of dishes in menu "} >
                            <IconButton onClick={e => deleteAll()} color="inherit">
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
const mapDispatchToProps = (dispatch) => ({
  //  getOptions: () => dispatch(getOptions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(NavMenu)
)
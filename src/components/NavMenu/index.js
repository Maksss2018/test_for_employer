import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import EuroSymbol from '@material-ui/icons/EuroSymbol';

import { withStyles } from '@material-ui/core/styles';

import {getOptions} from "../../actions";
import {connect} from "react-redux";




const NavMenu = ({classes,countItems,countPrice}) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                        <img style={{
                            height:"auto",
                            maxHeight:"100%",
                            width:"50px",
                            backgroundColor:"#ffffff"
                        }} src={`${process.env.PUBLIC_URL }/logo.svg`} alt=""/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        FatFish
                    </Typography>
                    <div className={classes.grow} />
                    <div style={{marginLeft:"auto"}} >
                        <IconButton color="inherit">
                            <Badge badgeContent={countItems} color="secondary">
                                <AddShoppingCart />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge max={10000} badgeContent={countPrice} color="secondary">
                                <EuroSymbol />
                            </Badge>
                        </IconButton>
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
        options: state.options
    }
};
const mapDispatchToProps = (dispatch) => ({
    getOptions: () => dispatch(getOptions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(NavMenu)
)
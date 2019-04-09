import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';


import {connect} from "react-redux";
import PlusOneRounded from "../Form";

import {  updateList, getNewList, delNewListItem } from "../../actions"

const dummyPlaceholder = "http://lorempixel.com/400/200/food";
const urlImg = "https://raw.githubusercontent.com/Maksss2018/beetroot-test/master/i/";


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});


const MarketList = ({ classes,items, delNewListItem, getNewList, newList}) => {
 /*   const handleDelete = id =>{
        delNewListItem(id);
    };
*/
    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="start"
              spacing={16}>
            <Grid item xs={4} >
                New
                <List className={classes.root}>
                    {newList!==null?newList.map(i=><ListItem key={i._id} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={`${i.name}`} src={i.img} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${i.name}`}
                            secondary={
                                <React.Fragment>
                                    <Typography component="span" className={classes.inline} color="textPrimary">
                                        {`${i.price}`}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <IconButton
                            style={{
                                marginLeft:"auto"
                            }}
                            onClick={e => delNewListItem(i._id)}
                            color="inherit">
                            <Clear />
                        </IconButton>
                    </ListItem>):"No data in storage"}
                </List>
            </Grid>
            <Grid item xs={4} >
                Old list
                <List className={classes.root}>
                    {items!==null?items.map(item => (<ListItem
                            key={item._id}
                            alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={item.name} src={`${urlImg}${item.img}`} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={`${item.name}`}
                                secondary={
                                    <React.Fragment>
                                        <Typography style={{
                                            color:`#33691e`
                                        }} component="span" className={classes.inline} >
                                            {`${item.price} $`}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>))
                        :"Loading"}


                </List>
            </Grid>
        </Grid>
    );
}

MarketList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        newList :state.newList
    }
};
const mapDispatchToProps = (dispatch) => ({
    updateList: (array) => dispatch(updateList(array)),
    getNewList : () => dispatch(getNewList()),
    delNewListItem : (id) => dispatch(delNewListItem(id))
});

export default connect( mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(MarketList)
)
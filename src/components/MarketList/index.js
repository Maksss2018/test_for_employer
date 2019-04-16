import React, {useContext,useEffect} from 'react';
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


import {StoreContext} from "../../context/StoreContext";
import PlusOneRounded from "../Form";



const dummyPlaceholder = "http://lorempixel.com/400/200/food";
const urlImg = "https://raw.githubusercontent.com/Maksss2018/beetroot-test/master/i/";


const MarketList = ({ classes}) => {
    const { state, dispatch, actions } = useContext(StoreContext);
    let { items, newList } = state,
        { updateList, getNewList, delNewListItem } = actions;
    useEffect(()=>{
    //    getNewList();
    },[]);
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
                    {items!==null?JSON.stringify(items)
                        :"Loading"}


                </List>
            </Grid>
        </Grid>
    );
}

MarketList.propTypes = {
    classes: PropTypes.object.isRequired,
};

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


export default withStyles(styles)(MarketList)
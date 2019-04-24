import React, {useContext, useEffect, useMemo, memo} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItemCustom from "./ListItemCustom";

import {StoreContext} from "../../context/StoreContext";

const urlImg = "https://raw.githubusercontent.com/Maksss2018/beetroot-test/master/i/";


const MarketList = ({ classes}) => {
    const { state, dispatch, actions } = useContext(StoreContext);
    let { updateList, getNewList, delNewListItem } = actions;
    let itemsMem =  useMemo( () => state.items, [state.items]),
        newListMem =  useMemo( () => state.newList, [state.newList]);
    useEffect(()=>{
        getNewList();
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
                    {newListMem!==null?newListMem.map((item)=>(<ListItemCustom
                        key={item._id}
                        item={item}
                        delNewListItem={delNewListItem}
                    />)):"No data in storage"}
                </List>
            </Grid>
            <Grid item xs={4} >
                Old list
                <List className={classes.root}>
                    {itemsMem!==null?itemsMem.map(item => (<ListItem
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
                    </ListItem>)):"Loading"}
                </List>
            </Grid>
        </Grid>
    );
};

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


export default memo( withStyles(styles)( MarketList))
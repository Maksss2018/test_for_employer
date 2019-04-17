import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';

const dummyPlaceholder = "http://lorempixel.com/400/200/food";

const ListItemCustom = ({ classes, delNewListItem,item}) => {
     const [thisItem,setThisItem]=useState({});
    useEffect(()=>{
        setThisItem(item);
    },[item]);

    return (<>
            <ListItem  alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={`${ thisItem.name}`} src={ thisItem.img} />
                </ListItemAvatar>
                <ListItemText
                    primary={`${ thisItem.name}`}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={classes.inline} color="textPrimary">
                                {`${ thisItem.price}`}
                            </Typography>
                        </React.Fragment>
                    }
                />
                <IconButton
                    style={{
                        marginLeft:"auto"
                    }}
                    onClick={e => delNewListItem(thisItem._id)}
                    color="inherit">
                    <Clear />
                </IconButton>
            </ListItem>
        </>);
};
/*
ListItemCustom.propTypes = {
    classes: PropTypes.object.isRequired,
};
*/
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


export default withStyles(styles)(ListItemCustom)
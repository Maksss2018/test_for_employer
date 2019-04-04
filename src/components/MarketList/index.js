import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getData,deleteItem} from '../../actions/'

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

const urlImg = "https://raw.githubusercontent.com/Maksss2018/beetroot-test/master/i/";
/*
{ "active":false,
        "info":{
            "name":"Овсяная каша с фруктами",
            "category":1,
            "img":"im1.jpg"
        },
        "data":{
            "price":25,
            "v":"грн",
            "counter":0
        }

    }
*/
const $ = (str) => document.getElementById(str);
const MarketList = ({classes,list,getData, deleteItem}) => {
    let [listOfItems,setListOfItems] = useState([]);
    useEffect(()=>{
        if(list!==null){
            setListOfItems(list);
        }
    },[list]);
    console.log(list);

    return (
        <div  className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Our Menu:</ListSubheader>
                </GridListTile>
                {listOfItems.map( (tile)=> (
                    <GridListTile id={`${tile._id}-container`} key={tile._id}>
                        <img src={`${urlImg}${tile.info.img}`} alt={tile.info.name} />
                        <GridListTileBar
                            title={tile.info.name}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <DeleteIcon id={tile._id} onClick={e=>{
                                        const trg =  $(`${tile._id}-container`);
                                        trg.classList = `${trg.classList} fadeOut animated `;
                                        setTimeout(()=>deleteItem(tile._id),800);
                                    }} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>

        </div>
    );
};

MarketList.propTypes = {
};

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1200,
        height: "auto",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};
const mapDispatchToProps = (dispatch) => ({
    // deleteTrainingPlace: (key) => dispatch(getData(key)),
});

export default connect(false, false)(
    withStyles(styles)(MarketList)
)

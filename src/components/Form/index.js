import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import {generate as id} from "shortid";
import PlusOneRounded from '@material-ui/icons/PlusOneRounded';
import Clear from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';


//import {connect} from "react-redux";

import MarketList from "../../components/MarketList";
import {getNewList, updateList, updateNewList} from "../../actions"
import {connect} from "react-redux";

const initialData = {
    "active":false,
    "_id": "",
    "name":"",
    "category":0,
    "img":null,
    "price":0,
    "v":"грн",
    "counter":0
};


function Form({classes,addItem,addItemLocal,updateNewList,history}) {
    let [state,setState] = useState(initialData);
       useEffect(()=>{
           if(localStorage.user!=="admin"){
               history.push("/");
           }
       },[]);

    let [name,setName]=useState("");
    const  handleChange = name => event => setState({...state,[name]: event.target.value});

    const  handleClear = event =>  setState(initialData);

    const  handleSubmit = async (event) => {
        event.preventDefault();
         state._id = await id();
        updateNewList(state);
        setState(initialData);
    };

    return (
        <>
        <form onSubmit={handleSubmit}
              className={classes.container}
              noValidate
              autoComplete="on">
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
            >
                <Grid item  xs={2}>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        value={state.name}
                        onChange={ handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item  xs={2}>

                    <TextField
                        id="outlined-name"
                        label="Price"
                        value={state.price}
                        onChange={ handleChange('price')}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item  xs={2}>
                    <IconButton type  color="inherit">
                        <PlusOneRounded />
                    </IconButton>
                    <IconButton onClick={handleClear} color="inherit">
                        <Clear />
                    </IconButton>
                </Grid>
            </Grid>
        </form>
            <MarketList/>
            </>
    );
}



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
//updatNewList


const mapStateToProps = (state) => {
    return {
        items: state.items,
        newList :state.newList
    }
};
const mapDispatchToProps = (dispatch) => ({
    updateList: (array) => dispatch(updateList(array)),
    updateNewList : (array) => dispatch(updateNewList(array))
});

export default connect( mapStateToProps, mapDispatchToProps)(
    withStyles(styles)(Form)
)

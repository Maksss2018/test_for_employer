import React from 'react';
import PropTypes from 'prop-types';
import {getOptions} from "../../actions";
import {connect} from "react-redux";

const NavMenu = (props) => {
    return (
        <div>

        </div>
    );
};

NavMenu.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        options: state.options
    }
};
const mapDispatchToProps = (dispatch) => ({
    getOptions: () => dispatch(getOptions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
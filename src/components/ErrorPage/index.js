import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

const ErrorPage = ({location}) => {
    return (
        <div>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="start"
                  spacing={16}>
                <Grid item xs={4} >
                <h2> 404</h2>
                    <span>
                        There is no page like this :{`${location.pathname}`}
                    </span>
                </Grid>
            </Grid>
        </div>
    );
}

export default ErrorPage;
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#135a98",
        '&:hover': {
            backgroundColor: '#166CB8',
        }
    }
}));

const FlechaTop = () => {
    const classes = useStyles();

    return (
        <Fab className={classes.root} color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
        </Fab>
    )
}

export default FlechaTop

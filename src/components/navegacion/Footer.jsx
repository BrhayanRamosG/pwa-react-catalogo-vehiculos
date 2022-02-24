import React from 'react'
import { Link as Route } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    textContainer: {
        position: "absolute",
        bottom: 14,
        right: 40,
        textAlign: "center",
        alignItems: 'center',
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className="footer">
            <div className={classes.textContainer}>
                &copy; {new Date().getFullYear()} Puebla Motors&nbsp;
                <Link component={Route} to="/cookies" color="inherit">
                    Cookies
                </Link>
                &nbsp;
                <Link component={Route} to="/privacidad" color="inherit">
                    Privacidad
                </Link>
            </div>
        </footer>
    )
}

export default Footer
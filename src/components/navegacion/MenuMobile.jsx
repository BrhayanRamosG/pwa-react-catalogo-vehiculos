import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useGetTheme } from '../../hooks/useGetTheme';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
        //textTransform: "uppercase",
        //background: '#135a98'
    },
    fullList: {
        width: 'auto',

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuDark: {
        "& .MuiPaper-root": {
            backgroundColor: "#273746",
            color: "#fff"
        },

        "& .MuiListItemIcon-root": {
            color: "#fff"
        },
        "& .MuiButtonBase-root:hover": {
            backgroundColor: "#707B7C"
        }

    },
}));

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const isDarkMode = useGetTheme()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const list = (anchor) => (
        <div
            className={
                clsx(classes.list,
                    { [classes.fullList]: anchor === 'top' || anchor === 'bottom', })
            }
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button component={Link} to="/">
                    <ListItemIcon> <HomeIcon /></ListItemIcon>
                    <ListItemText primary={"Inicio"} />
                </ListItem>
                <ListItem button component={Link} to="/nuevos">
                    <ListItemIcon> <DriveEtaIcon /></ListItemIcon>
                    <ListItemText primary={"Nuevos de agencia"} />
                </ListItem>
                <ListItem button component={Link} to="/seminuevos-usados">
                    <ListItemIcon> <DriveEtaIcon /></ListItemIcon>
                    <ListItemText primary={"Seminuevos y usados"} />
                </ListItem>
                <ListItem button component={Link} to="/plataformas">
                    <ListItemIcon> <DriveEtaIcon /></ListItemIcon>
                    <ListItemText primary={"Plataformas"} />
                </ListItem>
                <ListItem button component={Link} to="/remates">
                    <ListItemIcon> <DriveEtaIcon /></ListItemIcon>
                    <ListItemText primary={"Remates"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button component={Link} to="/creditos">
                    <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                    <ListItemText primary={"Créditos"} />
                </ListItem>
                <ListItem button component={Link} to="/contacto">
                    <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
                    <ListItemText primary={"Contacto"} />
                </ListItem>
            </List>
        </div >
    );

    return (
        <div >
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer('left', true)}
            >
                <MenuIcon />
                <Typography variant="caption" display="inline" >
                    Men&uacute;
                </Typography>
            </IconButton>
            <SwipeableDrawer
                className={`${isDarkMode && classes.menuDark}`}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </div>
    );
}

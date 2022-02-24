import React from 'react'
import { Link as Route } from 'react-router-dom';
//import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';

//import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useGetTheme } from '../../hooks/useGetTheme';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontSize: "1.1em",
        alignItems: 'baseline',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    menuDark: {
        backgroundColor: "#273746",
        color: "#fff",
        "& .MuiButtonBase-root:hover": {
            backgroundColor: "#707B7C",
        },
    },
    buttonTema: {

        fontWeight: "normal",
        textTransform: "capitalize",
        fontSize: "1em"
    }
}));

const MenuDesktop = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const isDarkMode = useGetTheme()
    const anchorRef = React.useRef(null);
    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open])

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <div className={classes.root}>
            {/* <Menu
                id="menu-list-grow"
                anchorEl={open}
                ref={anchorRef}
                aria-haspopup="true"
                keepMounted
                open={open}
                onClose={handleClose}
                className={`${isDarkMode && classes.menuDark} ${classes.menu}`}
            >
                <MenuItem component={Route} to="/nuevos" onClick={handleClose}>Nuevos de agencia</MenuItem>
                <MenuItem component={Route} to="/seminuevos-usados" onClick={handleClose}>Seminuevos y usados</MenuItem>
                <MenuItem component={Route} to="/remates" onClick={handleClose}>Remates</MenuItem>
                <MenuItem component={Route} to="/plataformas" onClick={handleClose}>Plataformas</MenuItem>
            </Menu> */}
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper className={`${isDarkMode && classes.menuDark}`}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem component={Route} to="/nuevos" onClick={handleClose}>Nuevos de agencia</MenuItem>
                                    <MenuItem component={Route} to="/seminuevos-usados" onClick={handleClose}>Seminuevos y usados</MenuItem>
                                    <MenuItem component={Route} to="/remates" onClick={handleClose}>Remates</MenuItem>
                                    <MenuItem component={Route} to="/plataformas" onClick={handleClose}>Plataformas</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

            {/* <ButtonGroup className={classes.botones} > */}
            {/* <Link component={Route} to="/" href="#" color="inherit">Inicio</Link>
            <Link ref={anchorRef} onClick={handleToggle} href="#" color="inherit">Veh&iacute;culos</Link> */}
            <Button
                component={Route} to="/"
                color="inherit"
                aria-haspopup="true"
                className={`${classes.buttonTema}`}
            >
                Inicio
            </Button>
            <Button
                color="inherit"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={`${classes.buttonTema}`}
            >
                Veh&iacute;culos
            </Button>
            <Button
                component={Route} to="/creditos"
                color="inherit"
                aria-haspopup="true"
                className={`${classes.buttonTema}`}
            >
                Cr&eacute;ditos
            </Button>
            <Button
                component={Route} to="/contacto"
                color="inherit"
                aria-haspopup="true"
                className={`${classes.buttonTema}`}
            >
                Contacto
            </Button>
            {/* <Link component={Route} to="/creditos" href="#" color="inherit">Cr&eacute;ditos</Link>
            <Link component={Route} to="/contacto" href="#" color="inherit">Contacto</Link> */}
            {/* </ButtonGroup> */}
        </div>
    )
}

export default MenuDesktop

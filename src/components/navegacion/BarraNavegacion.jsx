import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuDesplegable from './MenuMobile'
import Logo from '../../image/Logo.svg';
//import Typography from '@material-ui/core/Typography';

import MenuDesktop from './MenuDesktop'
import Toogle from './Toggle';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '& > img': {
      width: '100%',
      maxWidth: '28rem',
      height: 'auto'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '& > img': {
      width: '100%',
      maxWidth: '8rem',
      height: 'auto'
    }
  },
  sectionToogle: {
    marginLeft: 'auto'
  }

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar className="navbar">
          <div className={classes.sectionMobile}>
            <MenuDesplegable />
          </div>
          <div className={classes.sectionMobile}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={classes.sectionDesktop}>
            <img src={Logo} alt="logo" />
          </div>
          {/* <div className={classes.grow} /> */}
          <div className={classes.sectionDesktop}>
            <MenuDesktop />
          </div>
          <div className={classes.sectionToogle}>
            <Toogle />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

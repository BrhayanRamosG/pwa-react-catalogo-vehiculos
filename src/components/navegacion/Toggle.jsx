import { useState, useEffect, useContext } from 'react'
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ThemeContext from '../../context/theme-context';

const BlueSwitch = withStyles({
    switchBase: {
        color: '#D7DBDD',
        '&$checked': {
            color: '#F4D03F',
        },
        '&$checked + $track': {
            backgroundColor: '#fff',
        },
    },
    checked: {},
    track: {},
})(Switch);

const useStyles = makeStyles(() => ({
    darkModeOn: {
        color: '#F4D03F'
    },
    darkModeOff: {
        color: '#F5B041'
    }
}));

const Toogle = () => {
    const classes = useStyles()
    const theme = useContext(ThemeContext);
    const [isDarkMode, setisDarkMode] = useState(false)
    const themeColorMeta = document.querySelector('meta[name=theme-color]')
    useEffect(() => {
        setisDarkMode(localStorage.getItem("theme") === "dark" && true)
        if (isDarkMode) {
            themeColorMeta.setAttribute('content', '#154360')
        } else {
            themeColorMeta.setAttribute('content', '#135a98')
        }
    }, [isDarkMode, themeColorMeta])

    const cambiarTema = () => {
        if (isDarkMode) {
            theme.dispatch({ type: "light" });
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            themeColorMeta.setAttribute('content', '#135a98')
        } else {
            theme.dispatch({ type: "dark" });
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            themeColorMeta.setAttribute('content', '#154360')
        }
    };

    const handleChange = (event) => {
        setisDarkMode(event.target.checked);
        cambiarTema()
    };

    return (
        <Grid component="label" container alignItems="center" spacing={1} >
            <Grid>
                <WbSunnyIcon className={`${isDarkMode === false && classes.darkModeOff}`} />
            </Grid>
            <Grid>
                <BlueSwitch checked={isDarkMode} onChange={handleChange} />
            </Grid>
            <Grid>
                <Brightness2Icon className={`${isDarkMode && classes.darkModeOn}`} />
            </Grid>
        </Grid >
    )
}
export default Toogle
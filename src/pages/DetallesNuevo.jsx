import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DetallesGeneral from '../components/multimedia/DetallesGeneral';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        flexGrow: 1,
        marginTop: "1rem"
    }
}));

const DetallesNuevo = () => {
    React.useEffect(() => {
        document.title = "Puebla Motors | Detalles nuevo"
    }, [])
    const classes = useStyles();
    return (
        <div className={`${classes.root}`}>
            <DetallesGeneral />
        </div>
    )
}

export default DetallesNuevo

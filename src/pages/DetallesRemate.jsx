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

const DetallesRemate = () => {
    React.useEffect(() => {
        document.title = "Puebla Motors | Detalles remate"
    }, [])
    const classes = useStyles();
    return (
        <div className={`${classes.root}`}>
            <DetallesGeneral />
        </div>
    )
}

export default DetallesRemate

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        flexGrow: 1,
        marginTop: "1rem"
    },
}));

const Paginacion = ({ arrayDatos, itemsPorPagina, page, handleChange }) => {
    const classes = useStyles();
    const numpages = Math.ceil(arrayDatos.length / itemsPorPagina)

    return (
        <Grid className={classes.grid} container spacing={3}>
            <div>
                <Typography variant="body1">P&aacute;gina: {page}</Typography>
                <Pagination variant="outlined" className="paginacion" count={numpages} page={page} onChange={handleChange} size="large" showFirstButton showLastButton />
            </div>
        </Grid>
    )
}

export default Paginacion

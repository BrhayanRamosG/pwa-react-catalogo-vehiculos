import React from 'react'
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useGetAPI } from '../../hooks/useGetAPI';
import DetallesVehiculo from './DetallesVehiculo'
import ScrollTop from '../navegacion/ScrollTop'
import FlechaTop from '../navegacion/FlechaTop'
import { useRegistroVisitaPagina } from '../../hooks/useRegistroVisitaPagina';
import NoDatos from '../carga/NoDatos';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

const DetallesGeneral = (props) => {

    const { idVehiculo } = useParams()
    const detalleVehiculo = useGetAPI(`${idVehiculo}`)
    const imagenesVehiculo = useGetAPI(`imagen/${idVehiculo}`)
    const videosVehiculo = useGetAPI(`video/${idVehiculo}`)
    const classes = useStyles();
    useRegistroVisitaPagina(undefined, idVehiculo)

    if (detalleVehiculo.data.length === 0 || detalleVehiculo.status === -1) {
        return <NoDatos texto={"No hay información disponible"} />
    }

    return (
        <>
            <Typography className={`${classes.root} to-top`} variant="h3" gutterBottom>
                Detalles {detalleVehiculo.data[0].nombreTipo}
            </Typography>
            <Typography className={classes.root} variant="h4" gutterBottom>
                {`${detalleVehiculo.data[0].nombreMarca} 
                            ${detalleVehiculo.data[0].nombreModelo} 
                            ${detalleVehiculo.data[0].year}`}
            </Typography>
            {
                detalleVehiculo.data.map((val, index) => (
                    <Grid key={index} item xs={true} >
                        <DetallesVehiculo datos={val} imagenes={imagenesVehiculo.data} videos={videosVehiculo.data} />
                    </Grid>
                ))
            }
            <ScrollTop {...props}>
                <FlechaTop />
            </ScrollTop>
        </>
    )
}

export default DetallesGeneral

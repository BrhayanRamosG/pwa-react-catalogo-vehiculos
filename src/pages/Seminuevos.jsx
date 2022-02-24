import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TarjetaVehiculo from '../components/multimedia/TarjetaVehiculo'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { useGetAPI } from '../hooks/useGetAPI'
import { useRegistroVisitaPagina } from '../hooks/useRegistroVisitaPagina'
import Paginacion from '../components/navegacion/Paginacion'
import NoDatos from '../components/carga/NoDatos'
import OrdenarVehiculos from '../components/navegacion/OrdenarVehiculos'
import { OrdenarVehiculo } from '../functions/OrdenarVehiculo'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        flexGrow: 1,
        marginTop: "1rem"
    }
}));

const Seminuevos = () => {
    React.useEffect(() => {
        document.title = "Puebla Motors | Seminuevos y usados"

    }, [])
    useRegistroVisitaPagina(3)
    const classes = useStyles();
    const vehiculos = useGetAPI(`categoria/2`)
    const [page, setPage] = React.useState(1);
    const [itemsPerPage] = React.useState(9);
    const [orderPrice, setOrderPrice] = React.useState()

    const handleChange = (event, value) => {
        setPage(value);
        const anchor = (event.target.ownerDocument || document).querySelector('.grid');
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'auto', block: 'center' });
        }
    };

    const handleChangePrice = (event) => {
        setOrderPrice(event.target.value);
    };
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = vehiculos.data.slice(indexOfFirstItem, indexOfLastItem);

    if (vehiculos.data.length === 0 || vehiculos.status === -1) {
        return <NoDatos texto={"No hay información disponible"} />
    }
    OrdenarVehiculo(orderPrice, currentItems)
    return (
        <div className={`${classes.root} animate__animated animate__fadeIn`}>
            <Typography className="to-top grid" variant="h4" gutterBottom>
                Veh&iacute;culos seminuevos y usados {vehiculos.data.length > 0 && `(${vehiculos.data.length})`}
            </Typography>
            <Divider />
            {
                vehiculos.data.length > 1 && <OrdenarVehiculos orderPrice={orderPrice} handleChangePrice={handleChangePrice} />
            }
            <Grid className={classes.grid} container spacing={2}>
                {
                    currentItems?.map((val, index) => (
                        <Grid key={index} item xs sm={4} >
                            <TarjetaVehiculo datos={val} index={index} />
                        </Grid>
                    ))
                }
            </Grid>
            <Paginacion arrayDatos={vehiculos.data} itemsPorPagina={itemsPerPage} page={page} handleChange={handleChange} />
        </div>
    )
}

export default Seminuevos

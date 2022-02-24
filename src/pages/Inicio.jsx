import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TarjetaVehiculo from '../components/multimedia/TarjetaVehiculo'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { useGetAPI } from '../hooks/useGetAPI'
import { useRegistroVisitaPagina } from '../hooks/useRegistroVisitaPagina'
import CarruselFijo from '../components/multimedia/CarruselFijo'
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
    },
    paginacion: {
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
    darkModeOff: {
        borderTop: "2px solid #fff",
    },
    darkModeOn: {
        borderTop: "2px solid #135a98",
    },
}))

const Inicio = () => {

    React.useEffect(() => {
        document.title = "Puebla Motors | Inicio"
    }, [])

    useRegistroVisitaPagina(1)
    const classes = useStyles();
    const vehiculos = useGetAPI(`categoria`)
    const vehiculosFijos = useGetAPI(`fijos`)
    const [orderPrice, setOrderPrice] = React.useState()
    const [page, setPage] = React.useState(1)
    const [itemsPerPage] = React.useState(12)

    const handleChange = (event, value) => {
        setPage(value)
        const anchor = (event.target.ownerDocument || document).querySelector('.grid')
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'auto', block: 'center' });
        }
    }
    const handleChangePrice = (event) => {
        setOrderPrice(event.target.value);
    };

    const indexOfLastItem = page * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = vehiculos.data.slice(indexOfFirstItem, indexOfLastItem)

    if (vehiculos.data.length === 0 || vehiculos.status === -1) {
        return <NoDatos texto={"No hay información disponible"} />
    }
    OrdenarVehiculo(orderPrice, currentItems)
    return (
        <div className={`${classes.root} animate__animated animate__fadeIn`}>
            {
                vehiculosFijos.data.length > 0 && <><CarruselFijo imagenesFijas={vehiculosFijos.data} /> <br /></>
            }
            <Typography className="to-top grid" variant="h4" gutterBottom>
                Todos
            </Typography>
            <Divider />
            {
                vehiculos.data.length > 1 && <OrdenarVehiculos orderPrice={orderPrice} handleChangePrice={handleChangePrice} />
            }
            <Grid className={classes.grid} container spacing={2}>
                {
                    currentItems.map((val, index) => (
                        <Grid key={index} item xs sm={4} >
                            <TarjetaVehiculo datos={val} />
                        </Grid>
                    ))
                }
            </Grid>
            <Paginacion arrayDatos={vehiculos.data} itemsPorPagina={itemsPerPage} page={page} handleChange={handleChange} />
        </div>
    )
}

export default Inicio

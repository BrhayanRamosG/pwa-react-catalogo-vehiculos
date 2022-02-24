import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PageviewIcon from '@material-ui/icons/Pageview';
import CancelIcon from '@material-ui/icons/Cancel';
import Divider from '@material-ui/core/Divider';
import { useGetTheme } from '../../hooks/useGetTheme';

const PATH_BASE_IMG = process.env.REACT_APP_PATH_BASE
const API_KEY = process.env.REACT_APP_API_KEY

const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
        minWidth: '12rem'
    },
    textotitulocard: {
        textTransform: "uppercase"
    },
    textobodycard: {
        fontSize: "20px",
        '& > span': {
            fontSize: "22px",
            fontWeight: "bold"
        },
        '& > hr': {
            borderTop: "1px solid #135a98"
        },
    },
    textoinfo: {
        textTransform: 'none',
        fontSize: "19px"
    },
    estado0: {
        backgroundColor: "#1E8449",
        color: "#fff",
        fontSize: "16px"
    },
    estado1: {
        backgroundColor: "#CB4335",
        color: "#fff",
        fontSize: "16px"
    },
    estado2: {
        backgroundColor: "#8E44AD",
        color: "#fff",
        fontSize: "16px"
    },
    colorestadoicono: {
        color: "#fff"
    },
    darkModeCard: {
        backgroundColor: "#273746",
        color: "#fff",
        '& .MuiTypography-root': {
            color: "#fff",
        },
        '& hr': {
            borderTop: "1px solid #fff",
        },
        '& a': {
            color: "#fff",
        },
        '& a:hover': {
            backgroundColor: "#154380",
            color: "#fff",
        },
        boxShadow: '0px 2px 1px -1px #717D7E,0px 1px 1px 0px #717D7E,0px 1px 3px 0px #717D7E',
    },
});

const TarjetaVehiculo = ({ datos }) => {
    const classes = useStyles();
    const { idVehiculo, precio, year,
        estado, nombreMarca, nombreModelo, nombreCategoria, tratoPrecio,
        idCategoria, nombreTipo, nombreFormaPago, nombreFoto } = datos

    const isDarkMode = useGetTheme()

    const Verificar = (estado) => {
        if (estado === 1) {
            return <Chip className={classes.estado0} size="small" label="Disponible" icon={<CheckCircleIcon className={classes.colorestadoicono} />} />
        }
        else if (estado === 0) {
            return <Chip className={classes.estado1} size="small" label="No disponible" icon={<CancelIcon className={classes.colorestadoicono} />} />
        }
        else if (estado === 2) {
            return <Chip className={classes.estado2} size="small" label="Apartado" icon={<WatchLaterIcon className={classes.colorestadoicono} />} />
        }
    }
    const RUTA_VEHICULO = {
        1: "/nuevos/detalles-vehiculo/",
        2: "/seminuevos/detalles-vehiculo/",
        3: "/remates/detalles-vehiculo/"
    }
    return (
        <Card className={`${isDarkMode && classes.darkModeCard} ${classes.root}`} >
            <CardActionArea className={classes.textotitulocard} component={Link} to={`${RUTA_VEHICULO[idCategoria]}${idVehiculo}`}>
                <CardMedia
                    component="img"
                    alt={`${nombreMarca} ${nombreModelo} ${year}`}
                    height="200"
                    image={`${PATH_BASE_IMG}mostrar-imagen${nombreFoto}?api_key=${API_KEY}`}
                    title={`${nombreMarca} ${nombreModelo} ${year}`}
                />
            </CardActionArea>
            <CardContent>
                <Typography className={classes.textotitulocard} gutterBottom variant="h4" component="h2">
                    {`${nombreMarca} ${nombreModelo} ${year}`}
                </Typography>
                <Typography className={classes.textobodycard} variant="body1" color="textSecondary" component="div">
                    <span>{nombreCategoria}</span><br />
                    <Divider variant="middle" />
                    <span>Tipo: </span>{nombreTipo}<br />
                    <span>Precio: </span>${new Intl.NumberFormat("en-US").format(precio)} MXN<br />
                    <span>Precio a tratar: </span>{tratoPrecio === 1 ? "Sí" : "No"}<br />
                    <span>Forma de pago: </span>{nombreFormaPago}<br />
                    <span>Estado: </span> {Verificar(estado)}
                </Typography>
            </CardContent>

            <CardActions>
                <Button className={`${classes.textoinfo}`}
                    startIcon={<PageviewIcon />}
                    size="medium"
                    color="primary"
                    component={Link} to={`${RUTA_VEHICULO[idCategoria]}${idVehiculo}`}
                >
                    Ver m&aacute;s detalles
                </Button>
            </CardActions>
        </Card >
    )
}

export default TarjetaVehiculo

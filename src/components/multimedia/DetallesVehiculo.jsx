import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CancelIcon from '@material-ui/icons/Cancel';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Galeria from './Galeria';
import { useGetTheme } from '../../hooks/useGetTheme';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        flexGrow: 1,
        marginTop: "1rem"
    },
    entrega: {
        color: "#229954",
        fontSize: "1.1em"
    },
    estado0: {
        backgroundColor: "#1E8449",
        color: "#fff",
        fontSize: "1.2rem",
    },
    estado1: {
        backgroundColor: "#CB4335",
        color: "#fff",
        fontSize: "1.2rem"
    },
    estado2: {
        backgroundColor: "#8E44AD",
        color: "#fff",
        fontSize: "1.2rem"
    },
    colorestadoicono: {
        color: "#fff"
    },
    video: {
        position: "relative",
        //overflow: "hidden",
        width: "100%",
        paddingTop: "56.25%"
    },
    videoresponsive: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
        marginTop: "1rem"
    },
    textobodycard: {
        fontSize: "1.4rem",
        textAlign: 'center',
        '& > span': {
            //textTransform: "uppercase",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: 'center',
        }
    },
    aligntext: {
        textAlign: 'center'
    },
    aligntextdesc: {
        fontSize: "1.4rem",
        textAlign: 'left',
        '& > span': {
            fontSize: "1.5rem",
            fontWeight: "bold",
        }
    },
    darkMode: {
        //backgroundColor: "#273746",
        color: "#fff",
        '& .MuiTypography-root': {
            color: "#fff",
        },
        '& hr': {
            borderTop: "2px solid #fff",
        },
        '& a': {
            color: "#fff",
        },
        '& a:hover': {
            backgroundColor: "#154360",
            color: "#fff",
        },
        '& .texto-body>span>svg': {
            color: "#52BE80"
        },
    }
}));

const DetallesVehiculo = ({ datos, imagenes, videos }) => {
    const { idVehiculo, nombreCategoria, nombreMarca, nombreModelo, year, nombreTipo, nombreCondicion, estado, nombreFormaPago, kilometraje, transmision, tratoPrecio, precio, descripcion } = datos
    const classes = useStyles();
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
    let sizeimagenes = imagenes.length
    let sizevideos = videos.length
    const descripcionHTML = () => {
        return { __html: descripcion };
    }
    return (
        <>
            <Typography className={isDarkMode ? classes.darkMode : undefined} variant="body1" component="div" gutterBottom>
                <div className={classes.textobodycard} >
                    <span>Categor&iacute;a: </span>{nombreCategoria}<br />
                    <span>Tipo:</span> {nombreTipo} <br />
                    <span>Condici&oacute;n:</span> {nombreCondicion} <br />
                    <span>Transmisi&oacute;n:</span> {transmision} <br />
                    <span>Kilometraje:</span> {new Intl.NumberFormat("en-US").format(kilometraje)} KM<br />
                    <span>Precio:</span> ${new Intl.NumberFormat("en-US").format(precio)} MXN<br />
                    <span>Precio a tratar:</span> {tratoPrecio === 1 ? "Sí, trato serio" : "No"}<br />
                    <span>Forma de pago:</span> {nombreFormaPago} <br />
                    <span>Estado:</span> {Verificar(estado)} <br /><br />
                </div>
                <div className={classes.aligntextdesc} >
                    <span>Descripci&oacute;n:</span>
                    <div dangerouslySetInnerHTML={descripcionHTML()} />
                </div>
                {
                    estado === 1 &&
                    <div className={`texto-body ${classes.textobodycard}`} >
                        <Divider />
                        <span className={classes.aligntext}>Agenda tu cita</span>
                        <br />
                        <Badge color="secondary" >
                            <PhoneIcon className={classes.entrega} />
                        </Badge>
                        <Badge color="secondary" >
                            <Typography className={classes.textobodycard}><span>Tel&eacute;fono:</span>
                                &nbsp;<Link href="tel:+522311145281">
                                    231-114-5281
                                </Link>
                            </Typography>
                        </Badge><br />

                        <Badge color="secondary" >
                            <WhatsAppIcon className={classes.entrega} />
                        </Badge>
                        <Badge color="secondary" >
                            <Typography className={classes.textobodycard}><span>WhatsApp:</span>
                                &nbsp;<Link target="_blank" href={`https://wa.me/522311145281?text=${nombreCategoria}(${idVehiculo}): Estoy interesado en el vehículo ${nombreMarca} ${nombreModelo} año ${year}`}>
                                    Ir a WhatsApp
                                </Link>
                            </Typography>
                        </Badge><br />

                        <Badge color="secondary" >
                            <CheckBoxIcon className={classes.entrega} />
                        </Badge>
                        <Badge color="secondary" >
                            <Typography className={classes.textobodycard}><span>Entrega inmediata</span>
                            </Typography>
                        </Badge>
                    </div>
                }
            </Typography>

            {
                imagenes[0]?.nombreFoto !== undefined && estado === 1 &&
                <>
                    <br />
                    <Divider />
                    <br />
                    <Typography className={classes.aligntext} variant="h4" gutterBottom>
                        {sizeimagenes > 1 ? "Imágenes" : "Imágen"}
                    </Typography>
                    <br />
                    <Galeria imagenes={imagenes} />
                </>
            }
            {
                videos[0]?.url !== undefined && estado === 1 &&
                <>
                    <br />
                    <Divider />
                    <br />
                    <Typography variant="h4" gutterBottom>
                        {sizevideos > 1 ? "Videos" : "Video"}
                    </Typography>
                    {
                        videos?.map((val, index) => (
                            <>
                                <div key={index} className={classes.video}>
                                    <iframe className={classes.videoresponsive} src={`${val.url}`} title={val.url}></iframe>

                                </div>
                                <br />
                            </>
                        ))
                    }
                    <br />
                </>
            }
        </>
    )
}

export default DetallesVehiculo

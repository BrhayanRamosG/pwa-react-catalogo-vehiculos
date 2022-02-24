import React from 'react'

import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const PATH_BASE_IMG = process.env.REACT_APP_PATH_BASE
const API_KEY = process.env.REACT_APP_API_KEY

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 60,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: "auto",
        maxWidth: "100%",
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));

const CarruselFijo = ({ imagenesFijas }) => {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = imagenesFijas.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const agregarImagen = () => {
        let array = []
        imagenesFijas?.map((val, index) => (
            array.push({
                label: `Ver sugerencia #${index + 1}`,
                imgPath: `${PATH_BASE_IMG}mostrar-imagen${val.nombreFoto}?api_key=${API_KEY}`,
                idVehiculo: val.idVehiculo,
                idCategoria: val.idCategoria, infoVehiculo: `${val.nombreMarca} ${val.nombreModelo} ${val.year}`
            })
        ))
        return array;
    }
    const RUTA_VEHICULO = {
        1: "/nuevos/detalles-vehiculo/",
        2: "/seminuevos/detalles-vehiculo/",
        3: "/remates/detalles-vehiculo/"
    }
    return (
        <div className={`carrousel ${classes.root}`}>
            <Paper square
                elevation={5}
                className={`${classes.header} to-top`}
                component={Link}
                to={`${RUTA_VEHICULO[agregarImagen()[activeStep]?.idCategoria]}${agregarImagen()[activeStep]?.idVehiculo}`}
            >
                <Typography>{agregarImagen()[activeStep]?.infoVehiculo}:&nbsp;{agregarImagen()[activeStep]?.label}</Typography>

            </Paper>
            <img
                className={classes.img}
                src={agregarImagen()[activeStep]?.imgPath}
                alt={agregarImagen()[activeStep]?.label}
            />
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Siguiente
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Atr&aacute;s
                    </Button>
                }
            />
        </div>
    )
}

export default CarruselFijo

import React from 'react'
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge';
import { useRegistroVisitaPagina } from '../hooks/useRegistroVisitaPagina'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,

    },
    info: {
        fontSize: "1.2rem"
    }
});

const Contacto = () => {
    React.useEffect(() => {
        document.title = "Puebla Motors | Contacto"
    }, [])
    useRegistroVisitaPagina(7)
    const classes = useStyles();

    return (
        <div className={`contacto ${classes.root} animate__animated animate__fadeIn`}>
            <Typography variant="h4" gutterBottom>
                Informaci&oacute;n de contacto
            </Typography>
            <Badge color="secondary" >
                <EmailIcon />
            </Badge>
            <Badge color="secondary" >
                <Typography className={classes.info}>Correo electr&oacute;nico:
                    &nbsp;<Link target="_blank" href="mailto:ventas@pueblamotors.com.mx">
                        ventas@pueblamotors.com.mx
                    </Link>
                </Typography>
            </Badge><br />

            <Badge color="secondary" >
                <PhoneIcon />
            </Badge>
            <Badge color="secondary" >
                <Typography className={classes.info}>Tel&eacute;fono:
                    &nbsp;<Link href="tel:+522311145281">
                        231-114-5281
                    </Link>
                </Typography>
            </Badge><br />

            <Badge color="secondary" >
                <FacebookIcon />
            </Badge>
            <Badge color="secondary" >
                <Typography className={classes.info}>Facebook:
                    &nbsp;<Link target="_blank" href="https://www.facebook.com/profile.php?id=100040511775677">
                        Ir a Facebook
                    </Link>
                </Typography>
            </Badge><br />

            <Badge color="secondary" >
                <WhatsAppIcon />
            </Badge>
            <Badge color="secondary" >
                <Typography className={classes.info}>WhatsApp:
                    &nbsp;<Link target="_blank" href="https://wa.me/522311145281?text=Quisiera consultar sobre">
                        Ir a WhatsApp
                    </Link>
                </Typography>
            </Badge>
        </div>
    )
}

export default Contacto

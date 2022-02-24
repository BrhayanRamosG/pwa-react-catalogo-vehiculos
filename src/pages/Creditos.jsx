import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useRegistroVisitaPagina } from '../hooks/useRegistroVisitaPagina'

const Creditos = () => {
    React.useEffect(() => {
        document.title = "Puebla Motors | Créditos"
    }, [])
    useRegistroVisitaPagina(6)

    return (
        <div className={`animate__animated animate__fadeIn`}>
            <Typography variant="h4" gutterBottom>
                Cr&eacute;ditos
            </Typography>
            <Typography variant="h5" gutterBottom>
                Pr&oacute;ximamente
            </Typography>
        </div>
    )
}

export default Creditos

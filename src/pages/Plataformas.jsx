import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useRegistroVisitaPagina } from '../hooks/useRegistroVisitaPagina'

const Plataformas = () => {
    React.useEffect(() => {
        document.title = "Puebla Motors | Plataformas"
    }, [])
    useRegistroVisitaPagina(5)
    return (
        <div className={`animate__animated animate__fadeIn`}>
            <Typography variant="h4" gutterBottom>
                Plataformas
            </Typography>
            <Typography variant="h6" gutterBottom>
                UBER, CABIFY, DIDI <br />
                NUEVOS Y SEMINUEVOS FINANCIADOS DE AGENCIA <br />
                CERTIFICADOS GARANTIZADOS
            </Typography>
        </div>
    )
}

export default Plataformas

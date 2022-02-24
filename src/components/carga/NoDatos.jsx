import React from 'react'
import Typography from '@material-ui/core/Typography'

const NoDatos = ({texto}) => {
    return (
        <Typography className="to-top" variant="h6" gutterBottom>
            {texto}
        </Typography>
    )
}

export default NoDatos

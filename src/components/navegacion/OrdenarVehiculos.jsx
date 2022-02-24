import React from 'react'
import FormControl from '@material-ui/core/FormControl';

const OrdenarVehiculos = ({ orderPrice, handleChangePrice }) => {
    return (
        <FormControl className={`order-select`}>
            <div>
                <span>Ordenar por:</span>
            </div>
            <div>
                <select
                    value={orderPrice}
                    onChange={handleChangePrice}
                >
                    <option aria-label="None" defaultValue="">Defecto</option>
                    <option value={1}>Menor precio</option>
                    <option value={2}>Mayor precio</option>
                </select>
            </div>
        </FormControl>
    )
}

export default OrdenarVehiculos

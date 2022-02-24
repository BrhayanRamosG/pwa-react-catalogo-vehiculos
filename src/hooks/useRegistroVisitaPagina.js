import { useEffect, useState } from 'react'
import axios from 'axios'

const PATH_BASE = process.env.REACT_APP_PATH_BASE
const API_KEY = process.env.REACT_APP_API_KEY

export const useRegistroVisitaPagina = (idPagina, idVehiculo) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        const instance = axios.create({
            baseURL: PATH_BASE,
            params: {
                api_key: API_KEY
            }
        });

        try {
            const getData = async () => {
                if (idPagina !== undefined && idVehiculo !== undefined) {
                    const result = await instance.post(`registrar-visita-usuario/${idPagina}/${idVehiculo}`)
                    setdata(result.data.data)
                }
                if (idPagina !== undefined && idVehiculo === undefined) {
                    const result = await instance.post(`registrar-visita-usuario/${idPagina}`)
                    setdata(result.data.data)
                }
                if (idPagina === undefined && idVehiculo !== undefined) {
                    const result = await instance.post(`registrar-visita-usuario/null/${idVehiculo}`)
                    setdata(result.data.data)
                }
            }
            getData()
        } catch (error) {
            //console.error(error)
        }
        return () => {
            setdata([])
        }
    }, [idPagina, idVehiculo])

    return data;
}

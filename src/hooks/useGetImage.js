import { useState } from 'react'
import axios from 'axios'

const PATH_BASE = process.env.REACT_APP_PATH_BASE
const API_KEY = process.env.REACT_APP_API_KEY

export const useGetImage = (imagenRuta) => {
    const [image, setImage] = useState([])

    const instance = axios.create({
        baseURL: PATH_BASE,
        params: {
            api_key: API_KEY
        }
    });
    try {
        const getImage = async () => {
            if (imagenRuta !== undefined) {
                const result = await instance.post(`mostrar-imagen${imagenRuta}`)
                setImage(result.data)
            }
        }
        getImage()
    } catch (error) {
        console.error(error)
    }

    return image
}

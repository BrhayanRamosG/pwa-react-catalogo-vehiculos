import { useState, useEffect } from 'react'
import axios from 'axios'
const PATH_BASE = process.env.REACT_APP_PATH_BASE
const API_KEY = process.env.REACT_APP_API_KEY

export const useGetAPI = (url) => {
    const [dataAPI, setdataAPI] = useState([])
    const [isLoadedData, setisLoadedData] = useState(false)
    const [status, setStatus] = useState(-1)

    const data = { status, data: dataAPI, stateLoad: isLoadedData }

    useEffect(() => {
        const instance = axios.create({
            baseURL: PATH_BASE,
            params: {
                api_key: API_KEY
            }
        });
        try {
            const getData = async () => {
                if (url !== undefined) {
                    const result = await instance.get(`${url}`)
                    setStatus(result.status)
                    setdataAPI(result.data.data)
                    setisLoadedData(true)
                }
            }
            getData()
        } catch (error) {
            //console.error(error)
        }
        return () => {
            setdataAPI([])
        }
    }, [url])
    return data;
}

import { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

const ThemeContext = createContext()

const initialState = {
    darkMode: null
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case "light":
            window.localStorage.setItem("theme", action.type)
            return { darkMode: false };
        case "dark":
            window.localStorage.setItem("theme", action.type)
            return { darkMode: true };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    useEffect(() => {
        const registroVisita = async () => {
            await axios.post(`${process.env.REACT_APP_PATH_BASE}registrar-informacion-navegador?api_key=${process.env.REACT_APP_API_KEY}`)
        }
        registroVisita()
    }, [])
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContext

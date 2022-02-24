import { useEffect, useState, useContext } from "react"
import ThemeContext from "../context/theme-context";


export const useGetTheme = () => {
    const theme = useContext(ThemeContext);
    const [isDarkMode, setisDarkMode] = useState(false)

    useEffect(() => {
        setisDarkMode(localStorage.getItem("theme") === "dark" && true)
        if (isDarkMode) {
            document.body.classList.add('dark-mode')
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode')
        }
    }, [isDarkMode, theme.state.darkMode])

    return isDarkMode
}

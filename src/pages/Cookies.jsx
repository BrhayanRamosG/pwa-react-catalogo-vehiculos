import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useRegistroVisitaPagina } from '../hooks/useRegistroVisitaPagina'

const useStyles = makeStyles((theme) => ({
    textContainer: {
        textAlign: "left"
    }
}));

const Cookies = () => {
    React.useEffect(() => {
        document.title = "Puebla Motors | Cookies"
        window.scrollTo(0,0)
    }, [])
    useRegistroVisitaPagina(8)
    const classes = useStyles();

    const domainGroupId = "fb838be2-1d42-4a8d-aded-8abf3de0aa6d"
    const ref = React.useCallback(node => {
        if (!node) {
            return
        }
        const script = document.createElement('script')
        script.id = 'CookieDeclaration'
        script.type = 'text/javascript'
        script.async = true
        script.src = `https://consent.cookiebot.com/${domainGroupId}/cd.js`
        node.appendChild(script)
    }, [])
    return (
        <div className={`${classes.textContainer} animate__animated animate__fadeIn`} ref={ref} id="CookiebotDeclaration" />
    )
}

export default Cookies

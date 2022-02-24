import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useRegistroVisitaPagina } from '../hooks/useRegistroVisitaPagina'

const useStyles = makeStyles((theme) => ({
    textContainer: {
        textAlign: "left"
    }
}));
const Privacidad = () => {
    React.useEffect(() => {
        document.title = "Puebla Motors | Privacidad"
        window.scrollTo(0, 0)
    }, [])
    useRegistroVisitaPagina(9)
    const classes = useStyles();
    return (
        <div className={`animate__animated animate__fadeIn`}>
            <Typography variant="h4">
                Política de privacidad
            </Typography>
            <div >
                <article>
                    <div className={classes.textContainer}>
                        <p>Última actualización: 23 de enero de 2021</p>
                        <p>Puebla Motors (“nosotros”) opera el sitio web Puebla Motors (el “Servicio”).</p>
                        <p>Esta página le informa sobre nuestras políticas con respecto a la recopilación, el uso y la divulgación de información personal cuando utiliza nuestro Servicio.</p>
                        <p>No usaremos ni compartiremos su información con nadie excepto como se describe en esta Política de Privacidad.</p>
                        <p>Usamos su información personal para proporcionar y mejorar el servicio. Al utilizar el Servicio, acepta la recopilación y el uso de información de acuerdo con esta política.</p>
                        <h2>Recopilación y uso de información</h2>
                        <p>Mientras utiliza nuestro Servicio, es posible que le pidamos que nos proporcione cierta información de identificación personal que pueda usarse para contactarlo o identificarlo. La información de identificación personal (“Información personal”) puede incluir, pero no se limita a:</p>
                        <ul>
                            <li>Nombre</li>
                            <li>Número de teléfono</li>
                        </ul>
                        <h2>Datos de registro</h2>
                        <p>Recopilamos información que su navegador envía cada vez que visita nuestro Servicio (“Datos de registro”). Estos Datos de registro pueden incluir información como la dirección de Protocolo de Internet (“IP”) de su computadora, el tipo de navegador, la versión del navegador, las páginas de nuestro Servicio que visita, la hora y fecha de su visita, el tiempo que pasó en esas páginas y otras estadísticas.</p>
                        <h2>Cookies</h2>
                        <p>Las cookies son archivos con una pequeña cantidad de datos, que pueden incluir un identificador único anónimo. Las cookies se envían a su navegador desde un sitio web y se almacenan en el disco duro de su computadora.</p>
                        <p>Usamos “cookies” para recopilar información. Puede indicarle a su navegador que rechace todas las cookies o que indique cuándo se envía una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio.</p>
                        <h2>Proveedores de servicio</h2>
                        <p>Podemos emplear empresas e individuos de terceros para facilitar nuestro Servicio, para proporcionar el Servicio en nuestro nombre, para realizar servicios relacionados con el Servicio o para ayudarnos a analizar cómo se utiliza nuestro Servicio.</p>
                        <p>Estos terceros tienen acceso a su información personal solo para realizar estas tareas en nuestro nombre y están obligados a no divulgarla ni utilizarla para ningún otro propósito.</p>
                        <h2>Seguridad</h2>
                        <p>La seguridad de su información personal es importante para nosotros, pero recuerde que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal, no podemos garantizar su seguridad absoluta.</p>
                        <h2>Enlaces a otros sitios</h2>
                        <p>Nuestro Servicio puede contener enlaces a otros sitios que no son operados por nosotros. Si hace clic en el enlace de un tercero, se le dirigirá al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de privacidad de cada sitio que visite.</p>
                        <p>No tenemos control ni asumimos ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios o servicios de terceros.</p>
                        <h2>Privacidad de los niños</h2>
                        <p>Nuestro Servicio no se dirige a ninguna persona menor de 18 años (“Niños”).</p>
                        <p>No recopilamos a sabiendas información de identificación personal de niños menores de 18 años. Si usted es padre o tutor y sabe que su hijo nos ha proporcionado información personal, comuníquese con nosotros. Si descubrimos que un niño menor de 18 años nos ha proporcionado información personal, eliminaremos dicha información de nuestros servidores de inmediato.</p>
                        <h2>Cambios a esta política de privacidad</h2>
                        <p>Es posible que actualicemos nuestra Política de privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva Política de privacidad en esta página.</p>
                        <p>Se le aconseja que revise esta Política de privacidad periódicamente para detectar cualquier cambio. Los cambios a esta Política de privacidad entran en vigencia cuando se publican en esta página.</p>
                        <h2>Contacta con nosotros</h2>
                        <p>Si tiene alguna pregunta sobre esta Política de privacidad, comuníquese con nosotros.</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Privacidad

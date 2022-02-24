import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LinearIndeterminate from '../components/carga/CargaPagina';
const Inicio = lazy(() => import('../pages/Inicio'));
const Nuevos = lazy(() => import('../pages/Nuevos'));
const SemiNuevos = lazy(() => import('../pages/Seminuevos'));
const Remates = lazy(() => import('../pages/Remates'));
const DetallesNuevo = lazy(() => import('../pages/DetallesNuevo'));
const DetallesSeminuevo = lazy(() => import('../pages/DetallesSeminuevo'));
const DetallesRemate = lazy(() => import('../pages/DetallesRemate'));
const Plataformas = lazy(() => import('../pages/Plataformas'));
const Contacto = lazy(() => import('../pages/Contacto'));
const Creditos = lazy(() => import('../pages/Creditos'));
const Privacidad = lazy(() => import('../pages/Privacidad'));
const Cookies = lazy(() => import('../pages/Cookies'));

const RutasUsuario = () => {
    return (
        <Suspense fallback={<LinearIndeterminate />}>
            <Switch>
                <Route exact path='/' component={Inicio} />
                <Route exact path='/nuevos' component={Nuevos} />
                <Route exact path='/seminuevos-usados' component={SemiNuevos} />
                <Route exact path='/remates' component={Remates} />
                <Route exact path='/nuevos/detalles-vehiculo/:idVehiculo(\d+)' component={DetallesNuevo} />
                <Route exact path='/seminuevos/detalles-vehiculo/:idVehiculo(\d+)' component={DetallesSeminuevo} />
                <Route exact path='/remates/detalles-vehiculo/:idVehiculo(\d+)' component={DetallesRemate} />
                <Route exact path='/plataformas' component={Plataformas} />
                <Route exact path='/creditos' component={Creditos} />
                <Route exact path='/contacto' component={Contacto} />
                <Route exact path='/privacidad' component={Privacidad} />
                <Route exact path='/cookies' component={Cookies} />
                <Redirect to='/' />
            </Switch>
        </Suspense>
    );
}

export default RutasUsuario;
import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const PATH_BASE = process.env.REACT_APP_PATH_BASE
const API_KEY = process.env.REACT_APP_API_KEY

const Galeria = ({ imagenes }) => {


    const agregarImagen = () => {
        let array = []
        imagenes?.map((val) => (
            array.push({
                original: `${PATH_BASE}mostrar-imagen${val.nombreFoto}?api_key=${API_KEY}`, thumbnail: `
            ${PATH_BASE}mostrar-imagen${val.nombreFoto}?api_key=${API_KEY}`, thumbnailHeight: 70,
                originalAlt: val.nombreFoto, thumbnailAlt: val.nombreFoto
            })
        ))
        return array
    }
    return (
        <ImageGallery showIndex={true} slideInterval={5000} autoPlay={false} items={agregarImagen()} showThumbnails={true} />
    )
}

export default Galeria

import React from 'react'
import ImageLoader from 'react-imageloader';
import Preloader from "./Preloader"

export default function CardImage({ images, name }) {

    return <ImageLoader
        preloader={Preloader}
        className="card_img"
        src={require('../../../images/' + images[0] + '')}
        alt={name + "-photo"} />
}
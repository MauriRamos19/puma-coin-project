import React from 'react'
import cargando from '../../Assets/images/cargando.png'
import "./Trade.css";

const Trade = (props) => {
    return (
            <div className="Trade__image">
                <img className='Trade__img_waiting' src={cargando} />
            </div>
    )
}

export default Trade
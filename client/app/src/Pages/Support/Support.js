import React from 'react'
import cargando from '../../Assets/images/cargando.png'
import "./Support.css";

const Support = (props) => {
    return (
        <div className="Home__image">
			<img className='Support__img_waiting' src={cargando} />
		</div>
    )
}

export default Support
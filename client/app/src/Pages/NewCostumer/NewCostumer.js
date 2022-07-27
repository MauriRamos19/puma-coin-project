import React from 'react'
import cargando from '../../Assets/images/cargando.png'
import "./NewCostumer.css";

const NewCostumer = (props) => {
    return (
        <div className="Home__image">
			<img className='Support__img_waiting' src={cargando} />
		</div>
    )
}

export default NewCostumer
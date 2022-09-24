
import React from 'react'
import './Warning.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Warning = () => {
  return (
    <div className='Warning'>
        <p><FontAwesomeIcon className="icon" icon="fa-solid fa-warning" /> Completa tu registro ingresando al enlace que se ha enviado a tu correo electrónico </p>
    </div>
  )
}


import React from 'react'
import './Warning.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Warning = () => {
  return (
    <div className='Warning'>
        <p><FontAwesomeIcon className="icon" icon="fa-solid fa-warning" /> Complete su registro ingresando en el enlace que se envio a su correo electrónico </p>
    </div>
  )
}

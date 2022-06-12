import React from 'react'
import './AuthBlueSquare.css'
import logoImg from '../../Assets/images/pumaCoinLogo.png'
import { Link } from 'react-router-dom'

const AuthBlueSquare = (props) => {
    return (
        <div className='AuthBlueSquare'>
            {/* <div className='AuthBlueSquare__header'>
                <Link to='/'>Home</Link>
            </div> */}
            <div className='AuthBlueSquare__wrapper'>
                <Link
                    to='/'
                    className='AuthBlueSquare__logo'
                >
                    <img className='AuthBlueSquare__logo__img' src={logoImg} />
                    <h2 className='AuthBlueSquare__logo__name'>PumaCoin</h2>
                </Link>
                <div className='AuthBlueSquare__advertising'>
                    <p>First ones in <span className='Honduras'>Honduras</span></p>
                    <p>First ones in <span className='Pocket'>Pocket</span></p>
                    <p>First ones in <span className='Heart'>Heart</span></p>
                </div>
            </div>
        </div>
    )
}

export default AuthBlueSquare
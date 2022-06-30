import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../../Assets/images/pumaCoinLogo.png'
import Button from '../../Components/Button/Button'
import { logoutUser } from '../../services/auth'
import { useCookies, withCookies } from 'react-cookie';
import Cookies from 'universal-cookie'
import './Header.css'


const Header = (props) => {

    const { cookies } = props;

    const isLoggedIn = () => {

        const token = cookies.get('access_token')

        if (token) {
            return true
        } else {
            return false
        }
    }

    const logout = () => {
        cookies.remove('access_token')
        // window.location.reload();

    }

    return (
        <div className='Header'>
            <Link
                to='/'
                className='Header__logo'
            >
                <img className='Header__logo__img' src={logoImg} alt="" />
                <h2 className='Header__logo__name'>PumaCoin</h2>
            </Link>
            <div className='Header__navigation__wrapper'>
                <nav className='Header__navigation'>
                    <ul>
                        <li><NavLink to='/'>Principal</NavLink></li>
                        <li><NavLink to='/trade'>Trade</NavLink></li>
                        <li><NavLink to='/support'>Soporte</NavLink></li>
                    </ul>
                </nav>

                {isLoggedIn() ?
                    <div className='Header__account'>
                        <Button
                            className='Header__account__logout'
                            onClick={logout}>
                            Salir
                        </Button>
                    </div>
                    :
                    <div className='Header__account'>
                        <Link
                            to='/login'
                            className='Header__account__login'
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            to='/register'
                            className='Header__account__register'
                        >
                            <Button>
                                Registrate
                            </Button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default withCookies(Header)


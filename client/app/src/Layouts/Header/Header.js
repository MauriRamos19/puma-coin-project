import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logoImg from '../../Assets/images/pumaCoinLogo.png'
import Button from '../../Components/Button/Button'
import { useCookies, withCookies } from 'react-cookie';
import './Header.css'
import arrow from '../../Assets/arrow.svg'
import user from '../../Assets/user.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


const Header = ({ cookies }) => {

    const navigate = useNavigate();


    const isLoggedIn = () => {


        const token = cookies.get('x_access_token')

        

        
        if (token) return true

        return false
    }

    const logout = () => {

        cookies.remove('x_access_token')

        navigate("/");
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
                        <WalletMultiButton />
                        <nav className="Header__Menu__navigation">
                            <ul className = "Header__Menu__desplegable">                             
                                <li className ="Header__menu__item menu__item--show">
                                <a href="#" className="Header__menu__link">
                                    <FontAwesomeIcon className="icon" icon="fa-solid fa-user" />
                                    <FontAwesomeIcon className="Header__menu__arrow" icon="fa-solid fa-angle-down" />
                                </a>
                                    <div className="Header__div__menu">
                                    <ul className = "Header__menu__nesting">
                                        <li className ="Header__menu__inside">
                                            <Link to='/settings' className='Header__account__login'> Perfil </Link>
                                        </li>
                                        <hr/>
                                        <li className = "Header__menu__inside">
                                                <Button
                                                className='Header__account__logout'
                                                onClick={logout}>
                                                Salir
                                                </Button>
                                        </li>
                                    </ul>        
                                    </div>                           
                                </li>
                                
                                

                            </ul>                      
                        </nav>
                        
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

// export default Header;
export default withCookies(Header)


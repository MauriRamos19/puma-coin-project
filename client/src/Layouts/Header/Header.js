import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../../Assets/images/pumaCoinLogo.png'
import Button from '../../Components/Button/Button'
import './Header.css'

const Header = (props) => {

    const navigate = useNavigate();

    const isLoggedIn = () => {
        const token = localStorage.getItem('token')
        if (token) {
            return true
        } else {
            return false
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        // window.location.reload();
        navigate('/')
    }



    return (
        <div className='Header'>
            <Link 
                to='/'
                className='Header__logo'
            >
                <img className='Header__logo__img' src={logoImg} />
                <h2 className='Header__logo__name'>PumaCoin</h2>
            </Link>
            <div className='Header__navigation__wrapper'>
                <nav className='Header__navigation'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/trade'>Trade</Link></li>
                        <li><Link to='/support'>Support</Link></li>
                    </ul>
                </nav>
                
                {isLoggedIn() ?
                    <div className='Header__account'>
                        <Button 
                            className='Header__account__logout'
                            onClick={logout}>
                            Logout
                        </Button>
                    </div>
                    :
                    <div className='Header__account'>
                        <Link
                            to='/login'
                            className='Header__account__login'
                        >
                            Login
                        </Link>
                        <Link
                            to='/register'
                            className='Header__account__register'
                        >
                            <Button>
                                Register

                            </Button>
                        </Link>
                    </div>
                }           
                
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            Header
            <Link to="/">home</Link>
            <Link to="/trade">trade</Link>
            <Link to="/support">support</Link>
        </div>
    )
}

export default Header
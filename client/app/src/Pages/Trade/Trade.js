import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ConectWallet } from '../../Layouts/Transactions/conectWallet';
import { Link, Outlet } from 'react-router-dom'

const Trade = (props) => {
    return (
        <div className="Trade_Page">
            <Outlet/>
        </div>
    )
}

export default Trade
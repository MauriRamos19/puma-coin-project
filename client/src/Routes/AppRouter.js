import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from '../App';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Trade from '../Pages/Trade/Trade';
import Support from '../Pages/Support/Support';
import Home from '../Pages/Home/Home';
import FinishRegister from '../Pages/FinishRegister/FinishRegister';
import ModalManagment from '../Components/ModalManagment/ModalManagment';
import modalReducer from '../Reducers/modal';

const AppRouter = () => {

    const [modal, dispatchModal] = useReducer(modalReducer, {
        isActive: false
    });

    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/trade" element={<Trade />} />
                    <Route path="/support" element={<Support />} />
                </Route>
                <Route path="/register" element={<Register dispatchModal={dispatchModal}/>} />
                <Route path="/login" element={<Login dispatchModal={dispatchModal}/>} />
                <Route path="finish-register" element={<FinishRegister />} />
            </Routes>
            <ModalManagment {...modal} dispatchModal={dispatchModal} />
        </Router>
    )
}

export default AppRouter
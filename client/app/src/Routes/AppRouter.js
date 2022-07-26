import React, { useReducer } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLandmark, faArrowLeftLong, faCookie, faCookieBite } from '@fortawesome/free-solid-svg-icons'

import App from '../App';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Trade from '../Pages/Trade/Trade';
import Support from '../Pages/Support/Support';
import Home from '../Pages/Home/Home';
import PasswordReset from '../Pages/PasswordReset/PasswordReset';
import Settings from "../Pages/Settings/Settings";
import FinishRegister from '../Pages/FinishRegister/FinishRegister';
import ModalManagment from '../Components/ModalManagment/ModalManagment';
import modalReducer from '../Reducers/modal';
import FinishRegisterPersona from '../Pages/FinishRegisterPersona/FinishRegisterPersona';
import FinishRegisterCompany from '../Pages/FinishRegisterCompany/FinishRegisterCompany';
import OldCostumer from '../Pages/OldCostumer/OldCostumer';
import NewCostumer from '../Pages/NewCostumer/NewCostumer';
import TradeMenu from '../Pages/TradeMenu/TradeMenu';

library.add(faUser, faLandmark, faArrowLeftLong,faCookie,faCookieBite)


const AppRouter = () => {

    const [modal, dispatchModal] = useReducer(modalReducer, {
        isActive: false
    });

    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/trade" element={<Trade/>}>
                        <Route path="/trade" element={<TradeMenu />} />
                        <Route path="/trade/old-costumer" element={<OldCostumer />} />
                        <Route path="/trade/new-costumer" element={<NewCostumer />} />
                    </Route>
                    <Route path="/support" element={<Support />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
                <Route path="/register" element={<Register dispatchModal={dispatchModal} />} />
                <Route path="/login" element={<Login dispatchModal={dispatchModal} />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="password-reset/:userID/:token" element={<PasswordReset />} />
                <Route path="/finish-register/:userID" element={<FinishRegister />} />
                <Route path="/finish-register-persona/:userID" element={<FinishRegisterPersona />} />
                <Route path="/finish-register-company/:userID" element={<FinishRegisterCompany />} />
            </Routes>
            <ModalManagment {...modal} dispatchModal={dispatchModal} />
        </Router>
    )
}

export default AppRouter
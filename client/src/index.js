import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Trade from './Pages/Trade/Trade';
import Support from './Pages/Support/Support';
import Home from './Pages/Home/Home';
import FinishRegister from './Pages/FinishRegister/FinishRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="/trade" element={<Trade />} />
					<Route path="/support" element={<Support />} />
				</Route>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="finish-register" element={<FinishRegister />} />
			</Routes>
		</Router>
	</React.StrictMode>
);

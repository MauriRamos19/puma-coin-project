import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';
import { Warning } from './Components/Warning/Warning';
import { useEffect, useState } from 'react';
import { getUser } from './services/user';
import { withCookies } from 'react-cookie';

function App({ cookies }) {
	
    const [warning, setWarning] = useState(false);
	const token = cookies.get('x_access_token');

	useEffect(() => {
		if (token) {
			getUser(token).then(res => {
				if (res.user.verified === false) {
					setWarning(true);
				}
			
			})
		}
	}, [token])
		

	return (
		<div className="App">
			<Header />
			{warning === true ? <Warning /> : null}
			<Outlet />
			<Footer />
		</div>
	);
}

export default withCookies(App);
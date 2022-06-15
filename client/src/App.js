import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Layouts/Header/Header';

function App() {

	const [user, setUser] = useState(null);

	const changeUserHandler = (user) => {
		setUser(user);
	}

	return (
		<div className="App">
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
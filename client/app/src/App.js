import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';



function App() {
	
	return (
		<div className="App">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
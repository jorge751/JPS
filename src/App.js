
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

import AboutPage from './components/About';
import HomePage from './components/Home';
import SaaSPage from './components/Saas';
import VentasPage from './components/Ventas';
import FacturacionPage from './components/Facturacion';
import ColegioPage from './components/Colegio';
import ClientesPage from './components/Clientes';

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route exact path="/about" element = {<AboutPage />} />
					<Route exact path="/" element = {<HomePage />} />
					<Route exact path="/saas" element = {<SaaSPage />} />
					<Route exact path="/ventas" element = {<VentasPage />} />
					<Route exact path="/facturacion" element = {<FacturacionPage />} />
					<Route exact path="/colegio" element = {<ColegioPage />} />
					<Route exact path="/clientes" element = {<ClientesPage />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;

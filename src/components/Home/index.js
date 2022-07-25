import React from 'react';
import Form from './form';
import Carrusel from './carrusel';

function Compo() {
	return (
		<main>
			<div className='row'>
				<h1 className='my-3'>Bienvenidos!</h1>
			</div>

			<div className='row'>
				<div className='col'>
					<img src='./logoJPSwall.png'></img>
				</div>
				<div className='col text-center mx-4 my-1'>
					<p style={{fontSize: '25px', fontWeight: 'bold'}}>
						Somos una organización joven de
						<b> desarrollo Web y Escritorio </b>
						con mucho talento y deseamos que
						seas parte de nuestro crecimiento.
					</p>
					<p style={{fontSize: '25px', fontWeight: 'bold'}}>
						Apostamos a que nuestras licencias,
						servicios y contratos van asegurar productividad
						en tu negocio.
					</p>
				</div>
			</div>

			<div className='row'>
				<div className='col mx-4 my-5'>
					<Carrusel />
				</div>
			</div>

			<div className='row'>
				<div className='col mx-4 mb-5'>
					<Form />
				</div>
			</div>

		</main>
 	);
}

export default Compo;

/*
import logo from '../../logo.svg';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Compo() {
	return (
	    <>
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>

			<nav>
				<Link to="/about">About</Link>
			</nav>

		</header>
	)
}
*/

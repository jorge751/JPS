
import React, { useState } from 'react';
import Tarjeta from '../Card';
import cfg from './datos.json';
import contenido from './contenido.txt';

const UseTexto = () => {
	const [text, setText] = useState('');
	fetch(contenido)
		.then((respuesta) => respuesta.text())
		.then((contenido) => setText(contenido));
	return text || "Cargando...";
};

const useJson = (texto) => {
    const [file, setFile] = useState();
	useState(() => {
        fetch(texto, {mode: 'no-cors'})
			.then(response => response.json())
			.then(data => setFile(data))
			.catch(error => console.error(error))
    });
	return file || {};
}

function Compo() {

	const objJSON = useJson('/Colegio/tarjeta1/datos.json');
	objJSON['imagen'] = 'tarjeta1/imagen.png';

	return (
		<main>
			<h2>{cfg.titulo}</h2>
			<p><UseTexto /></p>
				<div style={{display: 'inline-flex', flexFlow: 'row wrap'}}>
					<Tarjeta
						titulo = {objJSON.titulo}
						imagen = {objJSON.imagen}
						contenido = {objJSON.texto}
					/>
					<Tarjeta
						titulo = {objJSON.titulo}
						imagen = {objJSON.imagen}
						contenido = {objJSON.texto}
					/>
					<Tarjeta
						titulo = {objJSON.titulo}
						imagen = {objJSON.imagen}
						contenido = {objJSON.texto}
					/>
				</div>
		</main>
	);
}

export default Compo;

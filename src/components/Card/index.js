
import Card from 'react-bootstrap/Card';
import BotonComprar from '../BotonComprar';

function Compo(params) {
	return (
		<Card className="shadow-lg p-3 mb-5 rounded strong"
			style={{
				width: '18rem',
				margin: '10px 10px',
				backgroundColor: 'rgb(251,234,227)'
			}}
		>
			<Card.Title>{params.titulo}</Card.Title>
			<Card.Img className="shadow-lg p-3 mb-2 bg-white rounded strong"
				variant="top"
				src={params.imagen}
				style={{padding: '0px 0px'}}
			/>
			<Card.Body>
				<Card.Text>{params.contenido}</Card.Text>
				<BotonComprar />
			</Card.Body>
		</Card>
	);
}

export default Compo;


import Button from 'react-bootstrap/Button';
import { useContCompraContext } from "../../context/ContadorCompra";

function Compo() {

	const { sumar } = useContCompraContext();

	return (
		<>
		<Button variant="primary" onClick={() => sumar()}>
			Comprar
		</Button>
		</>
	);
}

export default Compo;
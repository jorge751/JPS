
import Imagen from '../../../src/cart-fill.svg';

import { useContCompraContext } from '../../context/ContadorCompra';

function Compo() {

	const { contador, restar } = useContCompraContext();

	const cssDiv = {
	    display: 'inline',
    	position: 'relative'
	}

	const cssInsignia = {
		position: 'absolute',
		top: '16px',
		left: (contador > 9 ? '21px' : '24px')
	}

	return (
		<div
			className = 'btn btn-warning'
			style = {cssDiv}
			dataToggle = 'tooltip'
			dataPlacement = 'top'
			title = 'Restar carrito'
			onClick = { () => restar() }
		>
			<img src={Imagen} alt='logo' />
			<span className='badge' style={cssInsignia}>
				{contador}
			</span>
		</div>
	);
}

export default Compo;

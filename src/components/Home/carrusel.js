import Carousel from 'react-bootstrap/Carousel';

function Compo() {
	return (
		<>
		<h2 className='mx-1 my-3'>
			Algunos de nuestros productos
		</h2>
		<Carousel 
			className='w-75 mx-auto'
			style={{backgroundColor: 'rgba(242,118,73,0.5)'}}
		>
			<Carousel.Item>
				<h5 className='text-center mt-3'>
					Administración de colegio - Escritorio
				</h5>
				<img
					className='d-block mx-auto my-5'
					src='Colegio/tarjeta1/imagen.png'
					width='500px'
					alt='First slide'
				/>
			</Carousel.Item>

			<Carousel.Item>
				<h5 className='text-center mt-3'>
					Facturación sanatorial - Escritorio
				</h5>
				<img
					className='d-block mx-auto my-5'
					src='Facturacion/tarjeta1/imagen.png'
					width='500px'
					alt='Second slide'
				/>
			</Carousel.Item>

			<Carousel.Item>
				<h5 className='text-center mt-3'>
					Contabilidad - Escritorio
				</h5>
				<img
					className='d-block mx-auto my-5'
					src='Contabilidad/tarjeta1/imagen.png'
					width='500px'
					alt='Third slide'
				/>
			</Carousel.Item>

		</Carousel>
		</>
	);
}

export default Compo;

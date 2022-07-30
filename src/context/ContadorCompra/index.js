
//
//  Context de contador de compra
//

import React, { useContext } from 'react';

//  Accede a persistencia
import usePersistencia from './UsePersistencia';

//  Crea objeto-contexto
const ContCompraContext = React.createContext(0);

//  Crea contexto
export const useContCompraContext = () => useContext(ContCompraContext);

function Compo({children}) {

    //  Crea contador y su setter
    const [contador, setContador] = usePersistencia(0);

    //  Crea acción suma
    const sumar = () => setContador(contador + 1);

    //  Crea acción resta
    const restar = () => {if (contador > 0) setContador(contador - 1)};

    //  Devuelve función proveedora y expone contador y acciones
    return (
        <ContCompraContext.Provider 
            value={{
				contador,
                sumar,
                restar
            }}
        >
			{children}
		</ContCompraContext.Provider>
    );
};

export default Compo;

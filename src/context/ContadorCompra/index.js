
import React, { useContext, useState } from 'react';

const ContCompraContext = React.createContext(0);

export const useContCompraContext = () => useContext(ContCompraContext);

function Compo({children}) {

    const [contador, setContador] = useState(0);

    const sumar = () => setContador(contador + 1);

    const restar = () => {if (contador > 0) setContador(contador - 1)};

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

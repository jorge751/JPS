
//
//  Persistencia en local storage de contador de compra
//

import { useState } from 'react';

function Compo(valorParam) {

    const clave = 'contador_compra';

    //  Crea contador y su setter
    const [valor, setValor] = useState(() => {
        const valor = localStorage.getItem(clave);
        return valor ? Number(valor) : valorParam;
    });

    //  Crea acción de persistencia
    const set = (valor) => {
        setValor(valor);
        localStorage.setItem(clave, String(valor));
    };

    //  Devuelve valor y acción de persistencia
    return [valor, set];
}

export default Compo;

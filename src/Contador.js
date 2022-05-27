import React, { useState } from "react";

function Contador(){
    const [numero, setNumero] = useState(0)

    function aumentar(){
        setNumero(numero + 1)
    }
    function diminuir(){
        setNumero(numero - 1)
    }
    function zerar(){
        setNumero(0)
    }
    return(
        <div>
            
            <h1>Contador2.0</h1>
        <p id="result">{numero}</p>
        <button onClick={diminuir}>menos</button>
        <button onClick={aumentar}>mais</button>
        <button onClick={zerar}>zerar</button>
        </div>
    )
}
export default Contador
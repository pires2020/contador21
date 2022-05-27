import { useState } from "react"

export default function App() {
    
    let h = 0
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

    return <section>
        <h1>Contador2.0</h1>
        <p>{numero}</p>
        <button onClick={diminuir}>menos</button>
        <button onClick={aumentar}>mais</button>
        <button onClick={zerar}>zerar</button>
    </section>
}
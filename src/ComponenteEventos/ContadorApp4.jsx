import './ContadorApp.css'
import { useState } from 'react'

export const ContadorApp4 = ({ value }) => {
    
    const [contador, setContador] = useState(value)

    const manejarClick = () => {
        setContador(contador+1)
    }
    
    return (
        <>
            <h1>Contador</h1>
            <p>{ contador }</p>
            <button onClick={manejarClick}>Aumentar 1</button>
        </>
    )
}
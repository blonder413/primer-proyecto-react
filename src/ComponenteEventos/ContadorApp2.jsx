import './ContadorApp.css'

function manejarClick(e) {
    console.log(e);
}

// Esto es un componente
const Button = () => {
    return (
        <button onClick={manejarClick}>Soy un botón</button>
    )
}

export const ContadorApp2 = () => {
    return (
        <>
            <h1>Contador</h1>
            <Button></Button>
        </>
    )
}
import './ContadorApp.css'

export const ContadorApp3 = ({ value }) => {
    const manejarClick = () => {
        value += 1
        console.log(value);
    }
    return (
        <>
            <h1>Contador</h1>
            <p>{ value }</p>
            <button onClick={manejarClick}>Botón 1</button>
        </>
    )
}
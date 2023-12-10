import './ContadorApp.css'

function manejarClick(e) {
    console.log(e);
}

function manejarClick2(event, arg) {
    console.log(event);
    console.log(arg);
}

export const ContadorApp = ({value}) => {
    return (
        <>
            <h1>Contador</h1>
            <button onClick={function () { console.log('botón'); }}>Botón 1</button>
            <button onClick={function (event) { console.log(event); }}>Botón 2</button>
            <button onClick={(evento) => manejarClick(evento)}>Botón 3</button>
            <button onClick={manejarClick}>Botón 4</button>
            <button onClick={(evento) => manejarClick2(evento, 'hola mundo')}>Botón 5</button>
        </>
    )
}
import { useState } from "react";

export const AregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState("");
    /*const onInputChange = (event) => {
        setInputValue(event.target.value)
    }*/
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };
    const onSubmit = (event) => {
        const envio = {
            nombre: inputValue,
            visto: false
        }
        event.preventDefault()
        agregarTarea(tareas => [...tareas, envio])
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Ingresar Tarea"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    );
};

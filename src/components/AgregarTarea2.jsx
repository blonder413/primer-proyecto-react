import { useState } from "react";

export const AregarTarea2 = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState("");
    /*const onInputChange = (event) => {
        setInputValue(event.target.value)
    }*/
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)
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

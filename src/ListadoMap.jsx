import { useState } from "react";
import { AregarTarea } from "./components/AgregarTarea";

const Items = ({ nombre, visto }) => {
    return (
        // <li>{nombre} {visto ? "✅" : "⛔"}</li>
        <li>
            {nombre} {visto && "✅"}
        </li>
    );
};

let i = 6

export const ListadoMap = () => {
    const agregarTarea = () => {
        i = i+1;
        setArreglo([...arreglo, { id: i, nombre: "nuevo", visto: true }]);
    };
    let listado = [
        { id: 1, nombre: "Jill", visto: true },
        { id: 2, nombre: "Chris", visto: true },
        { id: 3, nombre: "Barry", visto: true },
        { id: 4, nombre: "Claire", visto: true },
        { id: 5, nombre: "Leon", visto: false },
        { id: 6, nombre: "Rebecca", visto: false },
    ];
    const [arreglo, setArreglo] = useState(listado);
    return (
        <>
            <h1>Listado App</h1>
            <AregarTarea></AregarTarea>
            <ol>
                {arreglo.map((item) => (
                    <Items
                        key={item.id}
                        nombre={item.nombre}
                        visto={item.visto}
                    ></Items>
                ))}
            </ol>
        </>
    );
};

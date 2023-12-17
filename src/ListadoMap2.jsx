import { useState } from "react";
import { AregarTarea2 } from "./components/AgregarTarea2";

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre} {visto && "✅"}
        </li>
    );
};

export const ListadoMap2 = () => {
    const agregarTarea = () => {
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

    const onAgregarTarea = (value) => {
        let valor = value.trim
        if (valor < 1) return
        const envio = {
            id: arreglo.length + 1,
            nombre: valor,
            visto: false
        }
        setArreglo([...arreglo, envio])
    }

    return (
        <>
            <h1>Listado App</h1>
            <AregarTarea2 agregarTarea={onAgregarTarea}></AregarTarea2>
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

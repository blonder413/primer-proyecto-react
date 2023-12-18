import { useEffect, useState } from "react";

export const UserList = ({ endpoint }) => {
    const [datos, setDatos] = useState([]);

    const fetchDatos = async () => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${endpoint}`
            );
            const data = await response.json();
            setDatos(data);
        } catch (error) {
            console.log(error);
        }
    };

    // el segundo parámetro escucha algún cambio en la propiedad para volver a llamar al componente
    useEffect(()=> {
        fetchDatos()
    }, [endpoint])

    return (
        <>
            <ul>
                {endpoint == "users"
                    ? datos.map((item) => <li key={item.id}>{item.name}</li>)
                    : datos.map((item) => <li key={item.id}>{item.body}</li>)}
            </ul>
        </>
    );
};

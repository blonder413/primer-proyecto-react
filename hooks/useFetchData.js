import { useEffect, useState } from "react";
import { fetchDatos } from "../src/helpers/fetchData";

export const useFetchData = (endpoint) => {
    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // el segundo parámetro escucha algún cambio en la propiedad para volver a llamar al componente
    /*
    useEffect(() => {
        fetchDatos(endpoint).then((res) => {
            setDatos(res.data);
            setIsLoading(res.isLoading);
        });
    }, [endpoint]);
    */

    /** Usando async await */
    const getData = async() => {
        const {data, isLoading} = await fetchDatos(endpoint)
        setDatos(data)
        setIsLoading(isLoading)
    }
    useEffect(() => {
        getData()
    }, [endpoint])

    return {
        datos,
        isLoading,
    };
};

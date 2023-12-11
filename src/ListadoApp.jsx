const Items = ({nombre, visto}) => {
    return (
        // <li>{nombre} {visto ? "✅" : "⛔"}</li>
        <li>{nombre} {visto && "✅"}</li>
    )
}

export const ListadoApp = () => {
    return(
        <>
            <h1>Listado App</h1>
            <ol>
                <Items nombre='Jill' visto={true}></Items>
                <Items nombre='Chris' visto={true}></Items>
                <Items nombre='Barry' visto={true}></Items>
                <Items nombre='Claire' visto={true}></Items>
                <Items nombre='Leon' visto={false}></Items>
                <Items nombre='Rebecca' visto={false}></Items>
            </ol>
        </>
    )
}
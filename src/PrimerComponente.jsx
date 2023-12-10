const string = "esto es un texto"
const number = 413
const array = ["reactjs", "javascript"]
const boolean = true
const funcion = () => 1+1
const objeto = {nombre: "reactj", lenguaje: "javascript"}
const fecha = new Date()

export const PrimerComponente = () => {
    return (
        <>
            {/* Fragment */}
            <h1>Variables en jsx</h1>
            <h4>Variables tipo string: {string}</h4>
            <h4>Variables tipo number: {number}</h4>
            <h4>Variables tipo array: {array}</h4>
        </>
    )
}
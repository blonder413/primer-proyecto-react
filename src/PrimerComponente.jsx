const string = "esto es un texto"
const number = 413
const array = ["reactjs", "javascript"]
const boolean = true
const funcion = () => 1+1
const objeto = {nombre: "reactj", lenguaje: "javascript"}
const fecha = new Date()

export const PrimerComponente = () => {
    return (
        <p>{ JSON.stringify(objeto) }</p>
    )
}
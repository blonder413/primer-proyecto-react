import React from 'react'
import ReactDOM from 'react-dom/client'
// Importar componente declarado como función o clase
// import PrimerComponente from './PrimerComponente'
import { PrimerComponente } from './PrimerComponente'
import './estilos.css'
import { ComponenteProps } from './ComponenteProps/ComponenteProps'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente></PrimerComponente>
    <hr />
    {/* <ComponenteProps titulo="Blonder" subtitulo={413}></ComponenteProps> */}
    <ComponenteProps></ComponenteProps>
  </React.StrictMode>,
)

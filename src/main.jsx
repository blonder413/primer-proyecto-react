import React from 'react'
import ReactDOM from 'react-dom/client'
// Importar componente declarado como función o clase
// import PrimerComponente from './PrimerComponente'
import { PrimerComponente } from './PrimerComponente'
import './estilos.css'
import { ComponenteProps } from './ComponenteProps/ComponenteProps'
import { ContadorApp } from './ComponenteEventos/ContadorApp'
import { ContadorApp2 } from './ComponenteEventos/ContadorApp2'
import { ContadorApp3 } from './ComponenteEventos/ContadorApp3'
import { ContadorApp4 } from './ComponenteEventos/ContadorApp4'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PrimerComponente></PrimerComponente> */}
    {/* <ComponenteProps titulo="Blonder" subtitulo={413}></ComponenteProps> */}
    {/* <ComponenteProps></ComponenteProps> */}
    {/* <ContadorApp></ContadorApp> */}
    {/* <ContadorApp2 value={0}></ContadorApp2> */}
    {/* <ContadorApp3 value={0}></ContadorApp3> */}
    <ContadorApp4 value={0}></ContadorApp4>
  </React.StrictMode>,
)

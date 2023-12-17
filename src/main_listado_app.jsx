import React from 'react'
import ReactDOM from 'react-dom/client'
import './estilos.css'
import { ListadoApp } from './ListadoApp'
import { ListadoMap } from './ListadoMap'
import { ListadoMap2 } from './ListadoMap2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ListadoApp></ListadoApp> */}
    {/* <ListadoMap></ListadoMap> */}
    <ListadoMap2></ListadoMap2>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './estilos.css'
import { ListadoApp } from './ListadoApp'
import { ListadoMap } from './ListadoMap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ListadoApp></ListadoApp> */}
    <ListadoMap></ListadoMap>
  </React.StrictMode>,
)

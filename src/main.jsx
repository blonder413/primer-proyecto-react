import React from 'react'
import ReactDOM from 'react-dom/client'
// Importar componente declarado como función o clase
// import PrimerComponente from './PrimerComponente'
import {PrimerComponente} from './PrimerComponente'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente></PrimerComponente>
  </React.StrictMode>,
)

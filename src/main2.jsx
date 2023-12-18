import React from 'react'
import ReactDOM from 'react-dom/client'
import './estilos.css'
import { UsersApp } from './components/UsersApp'
import { UsersApp2 } from './components/UsersApp2'
import { UseEffect } from './components/UseEffect'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <UsersApp></UsersApp> */}
        {/* <UsersApp2></UsersApp2> */}
        <UseEffect></UseEffect>
    </React.StrictMode>
)
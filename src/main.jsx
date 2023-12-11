import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import Layout from './components/layout'
import NuevoCliente, {action as nuevoClienteAction } from './pages/NuevoCliente'
import Index, {loader as clientesLouder} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente, {loader as editarClienteLouder, action as editarClienteAction} from './components/EditarCliente'
import {action as eliminarClienteAction } from './components/cliente'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLouder,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente />,
                action: nuevoClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: '/cliente/:clienteId/editar',
                element: <EditarCliente />,
                action: editarClienteAction,
                loader: editarClienteLouder,
                errorElement: <ErrorPage />
            },
            {
                path: '/cliente/:clienteId/eliminar',
                action: eliminarClienteAction,
                errorElement: <ErrorPage />
            }
        ]
    },  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

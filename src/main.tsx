import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Preloader } from './App.tsx'

import './index.css'

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  }
])

const store = createStore({
  authType: 'localstorage',
  authName: '_openrsacloud'
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <AuthProvider store={store}>
          <RouterProvider router={Routes}/>
        </AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  </React.StrictMode>,
)

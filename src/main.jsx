import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RegistrationContextProvider } from './context/RegistrationContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <RegistrationContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RegistrationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

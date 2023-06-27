import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import { ContextProvider } from './context/userContext/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider>
    
  </React.StrictMode>,
)

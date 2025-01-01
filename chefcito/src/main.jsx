import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Header/Home.jsx'
import Inicio from './components/Main/Inicio.jsx'
import App from './components/app.jsx'
import Contacto from './components/Footer/Contacto.jsx'

// localStorage.removeItem('recipes');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Inicio />
    <App />
    <Contacto />
    
    
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App'

const WebSiteName = "/"



import "./styles/main-styles.css"


const ROOT = document.getElementById('root');

createRoot(ROOT!).render(
  <StrictMode>
    <BrowserRouter basename={WebSiteName}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';

import App from './App'

export const WebSiteName = "/portfolio-dev"



import "./styles/main-styles.css"


const ROOT = document.getElementById('root');

createRoot(ROOT!).render(
  <StrictMode>
    <BrowserRouter basename={WebSiteName}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

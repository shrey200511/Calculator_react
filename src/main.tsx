import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RoutesManager } from './routing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesManager />
  </StrictMode>,
)

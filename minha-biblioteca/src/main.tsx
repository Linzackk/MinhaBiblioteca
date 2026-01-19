import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BooksProvider } from './contexts/BooksContext.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BooksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BooksProvider>
  </StrictMode>
)

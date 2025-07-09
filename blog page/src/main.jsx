import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/Blog/blog.css'
import Blog from './components/Blog/Blog.jsx'
import Navbar from './components/Navabar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog />
    <Navbar />
  </StrictMode>,
)

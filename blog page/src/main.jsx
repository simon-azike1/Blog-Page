import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as  Router , Routes, Route , Link} from 'react-router-dom'
import Home from '@/components/Home/Home.jsx'
import About from '@/components/Pages/About/About.jsx'
import Navbar from '@/components/Navabar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
 <Router>
   <Navbar />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
</Router>
 </StrictMode>
  


)

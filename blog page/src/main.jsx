import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as  Router , Routes, Route , Link} from 'react-router-dom'
import Home from '@/components/Home/Home.jsx'
import About from '@/components/Pages/About/About.jsx'
import Tour from '@/components/Pages/Tour/Tour.jsx'
import Blog from  '@/components/Pages/Blog/Blog.jsx'
import Navbar from '@/components/Navabar/Navbar.jsx'
import Button from '@/components/Buttons/Buttons.jsx'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')).render(
 <StrictMode>
 <Router>
  
  <Navbar/>
  {/* <Button/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/tours' element={<Tour/>}/>
    <Route path='/blog' element={<Blog/>}/>
  </Routes>
  <Footer/>
</Router>
 </StrictMode>
 )

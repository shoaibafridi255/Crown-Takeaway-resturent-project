import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Frontend/Home'
import About from './pages/Frontend/About'
import OpeningHours from './pages/Frontend/OpeningHours'
import OurMenu from './pages/Frontend/OurMenu'
import Contact from './pages/Frontend/Contact'


export default function Index() {
  return (
    <>
    <Routes>

    <Route path='/' element = { <Home /> } ></Route>
    <Route path='/About' element = { <About /> } ></Route>
    <Route path='/OpeningHours' element = { <OpeningHours /> } ></Route>
    <Route path='/OurMenu' element = { <OurMenu /> } ></Route>
    <Route path='/Contact' element = { <Contact /> } ></Route>
    <Route path='/*' element = {  <h1> 404! Page not found</h1>  } ></Route>

    </Routes>    
    </>
  )
}

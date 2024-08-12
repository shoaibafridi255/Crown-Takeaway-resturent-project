import React from 'react'
import Footer from './pages/Footer/Footer'
import Navbar from './pages/Header/Navbar'
import  Routes  from './Routes'


export default function App() {
  return (
    <>
    <header>
    <Navbar></Navbar>

    </header>

    <main>
    <Routes />


    </main>

    <footer>
    <Footer />
    </footer>
    </>
  )
}


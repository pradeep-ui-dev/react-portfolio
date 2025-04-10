import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Header/>
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App

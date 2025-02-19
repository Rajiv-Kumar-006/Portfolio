import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AOS from "aos";
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
      <div>
        <Navbar />

        <div className="container ">
        <Home/>
        <Experience/>
        <Skills/>
        <Projects/>
        </div>
        <Contact/>
      </div>
    </>
  )
}

export default App

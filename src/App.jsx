import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certificates from './components/certificates'
import ImageSlider from './components/ImageSlider';

function App() {


  return (
    <>
    <div className='overflow-x-hidden max-w-full'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Certificates />
      {/* <ImageSlider /> */}
      </div>

      
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes> */}
    </>
  )
}

export default App

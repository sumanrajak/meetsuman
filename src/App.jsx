import {  Route, Routes,  } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css'
import Portfolio from './pages/Portfolio';
import Loading from './pages/Loading';
import { useState } from 'react';

function App() {
const [isLoaded, setisLoaded] = useState(true)
const changeLoading=(isloading)=>{
  setisLoaded(isloading)
}
  return (
    <div>
      {isLoaded?<Loading changeLoading={changeLoading} ></Loading>:
      <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/photography" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </>}

      
    </div>
  )
}

export default App

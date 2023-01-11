import React from 'react'
import About from './components/About'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Anasayfa from './components/Anasayfa'
import { Routes, Route, Link, Navlink, Switch } from 'react-router-dom'


import './App.css'
function App() {
  return (

    <div className="App">
      <Routes>
        {/* <Route index={true} element={<Anasayfa />} /> */}
        <Route path='/Home' element={<Anasayfa />} />
        <Route path='/About' element={<About />} />
        <Route path='/Certificate' element={<Certificate />} />
        <Route path='/Contact' element={<Contact />} />

      </Routes>



    </div>






  );
}

export default App;

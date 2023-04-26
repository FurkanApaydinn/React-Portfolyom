import React from 'react'
import logo2 from '../İmages/logo.png'
// import logo2 from './İmages/logo.png'
import Header from '../components/header'
import Footer from '../components/footer'
import { Routes, Route, Link, Navlink, BrowserRouter } from 'react-router-dom'
import cv from '../FurkanApaydin.pdf'


import '..//App.css'

export default function About() {

  return (

    <div >
      <Header />
      <h1 className='baslikabout'>About</h1>
      <div className='section-center page-info' >
        <p>
          Hello, I'm Furkan and I'm a web developer. I was born in 1992 in Istanbul/Ümraniye. I live and work in Istanbul. I spend most of my day experimenting with HTML, CSS, and JavaScript (and an endless list of frames). I love coding and the challenge of learning something new every day. My resume is below.<br></br>

          <a download href="https://www.kariyer.net/ozgecmis-duzenle/?cvId=aN%2Fov6FDvN03YWQWbTA5Rg%3D%3D%21e%21"><button className="btn btn-outline-warning mt-3" type="submit" >Detaylı bilgi için tıklayınız.</button></a>

        </p>

      </div>
      <Footer />
    </div >
  )
}

import React from 'react'
import Header from './header'
import Footer from './footer'
import '../App.css'

export default function Contact() {
  return (

    <div >
      <Header />
      <h1 className='baslik'>Contact</h1>

      <div className='contact' >
        <div className='contacts'>

          <form >
            <h6 className='baslik mb-4 justify-content-start'>Benimle iletişime geçebilirsiniz.</h6>
            <div class="form-outline mb-4  ">
              <input style={{ width: "200%" }} type="text" id="form6Example3" class="form-control" placeholder='Name' required />
            </div>


            <div class="form-outline mb-4">
              <input style={{ width: "200%" }} type="text" id="form6Example4" class="form-control" placeholder='Last Name ' required />

            </div>


            <div class="form-outline mb-4">
              <input style={{ width: "200%" }} type="email" id="form6Example5" class="form-control" placeholder='Email' required />

            </div>


            <div class="form-outline mb-4">
              <input style={{ width: "200%" }} type="number" id="form6Example6" class="form-control" placeholder='Phone' required />

            </div>


            <div class="form-outline mb-4">
              <textarea style={{ width: "200%" }} class="form-control" id="form6Example7" rows="4" placeholder='Explanation'></textarea>

            </div>


            <div class="form-check d-flex justify-content-center mb-4">


              <button onClick={"mailto:furkan_apydn@hotmail.com"} className='' type="submit" class="btn btn-outline-warning mb-4" >Submit</button>
            </div>



          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import React from 'react'
import Header from './header'
import Footer from './footer'
import '../App.css'

export default function Contact() {
  return (

    <div >
      <Header />
      <div className='contact'>

        <form>




          <div class="form-outline mb-4 ">
            <input style={{ width: "80vh" }} type="text" id="form6Example3" class="form-control" placeholder='Name' />

          </div>


          <div class="form-outline mb-4">
            <input type="text" id="form6Example4" class="form-control" placeholder='Last Name ' />

          </div>


          <div class="form-outline mb-4">
            <input type="email" id="form6Example5" class="form-control" placeholder='Email' />

          </div>


          <div class="form-outline mb-4">
            <input type="number" id="form6Example6" class="form-control" placeholder='Phone' />

          </div>


          <div class="form-outline mb-4">
            <textarea class="form-control" id="form6Example7" rows="4" placeholder='Explanation'></textarea>

          </div>


          <div class="form-check d-flex justify-content-center mb-4">


            <button className='' type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
          </div>



        </form>
      </div>

      <Footer />
    </div>
  )
}

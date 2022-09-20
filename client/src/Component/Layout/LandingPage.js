import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

function LandingPage() {
  return (
    <Fragment>
 

 <section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
      <div>
        <h1>App landing page template</h1>
        <h2>Lorem ipsum dolor sit amet, tota senserit percipitur ius ut, usu et fastidii forensibus voluptatibus. His ei nihil feugait</h2>
        <Link to="login" class="download-btn"><i class="bx bxl-play-store"></i> Sign in</Link>
        <Link to="register" class="download-btn"><i class="bx bxl-apple"></i> Sign up</Link>
      </div>
    </div>
    <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
      <img src="/IMG_4400.jpg" height="300px" class="img-fluid fix" alt=""/>
    </div>
  </div>
</div>

</section>


  


    </Fragment>
  )
}

export default LandingPage
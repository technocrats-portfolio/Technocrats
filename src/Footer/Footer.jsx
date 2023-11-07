import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
  return (

<>
   <section className='footer-color pt-5 pb-5 shadow-lg mt-5'> 

    <div className='footer-section mt-5'>
      <div className='footer-part'>
        <h3 className='footer-logo'>TECHNOCRATS</h3>
        <p>With a relentless pursuit of excellence, we design, develop, and innovate to help you thrive in the digital age. Let us turn your ideas into reality and your challenges into opportunities. Connect with us today to embark on a journey of digital transformation.</p>
      </div>
      
      <div className=' footer-part'>
       <h3>Services</h3>
       <p>Full Stack Development</p>
       <p>Graphic Designing</p>
       <p>Mobile App Development</p>
       <p>DevOps</p>
       
      </div>

      <div className='footer-part'>
       <h3>Quick Links </h3>
      <p> <a href='/' className='quick-links'>Home</a></p> 
      <p  className='mt-1'> <a href='#services'>Services</a> </p>
     <p className='mt-1'>  <a href='#portfolio'>Porfolio</a> </p>
      {/* <p> <Link to="/about">About Us </Link></p> */}
       {/* <p className='mt-1'>Gallery</p> */}
      </div>

       <div className='footer-part'>
       <h3>Contact Us</h3>
       <p><a href="mailto:tech@gmail.com">tech@gmail.com</a></p>
       <p><a href="tel:+923034737508">+92 3034737508</a></p>
       
       <form>
          <ul class="list-unstyled d-flex icon-f">
        <li class="ms-3"><a class="text-white " href="/#"><AiOutlineTwitter className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="https://www.linkedin.com/company/cyberoide-tech/"><AiFillLinkedin className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsFacebook className='icon'/></a></li>
        <li class="ms-3"><a class="text-white " href="/#"><BsInstagram className='icon'/></a></li>
      </ul>
        </form>
      </div>
    </div>
   </section>

   <section className='bg-dark pt-4 pb-4'>
   <p class="text-center text-light">© 2023 Technocrats. All rights reserved.</p>
   </section>
   </>
  )
}

export default Footer
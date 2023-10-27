import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
    <div>
      <a href="#" className='footer_logo'>Saurabh</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://linkedin.com/in/saurabh-kumar9493"><FaLinkedin/></a>
        <a href="https://github.com/saurabhkumar5"><BsGithub/></a>
        <a href="https://twitter.com/SaurabhMaurya_5"><IoLogoTwitter/></a>
      </div>
    </div>
    </footer>
  )
}

export default Footer
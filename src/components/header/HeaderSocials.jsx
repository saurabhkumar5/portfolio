import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
       <a href="https://linkedin.com/in/saurabh-kumar9493" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/saurabhkumar5" target='_blank'><FaGithub/></a>
       <a href="https://twitter.com/SaurabhMaurya_5" target='_blank'><IoLogoTwitter/></a>
    </div>
  )
}

export default HeaderSocials
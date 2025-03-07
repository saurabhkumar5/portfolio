import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3b66m7v', 'template_bbsnvuk', form.current, 'oopQ6KKE6vG9xKVEL')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>saurabhkumar9493@gmail.com</h5>
            <a href="mailto:saurabhkumar9493@gmail.com" target='_blank'>send a message</a>
          </article>
          {/* <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/ernest.achiever" target='_blank'>send a message</a>
          </article> */}
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7270879493</h5>
            <a href="https://api.whatsapp.com/send?phone=7270879493" target='_blank'>send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
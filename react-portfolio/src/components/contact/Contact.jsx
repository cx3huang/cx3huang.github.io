import React from 'react'
import './contact.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaMailBulk} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <FaMailBulk className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>cx3huang@uwaterloo.ca</h5>
            <a href='mailto:cx3huang@uwaterloo.ca' target="_blank">Send an email</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>chuang-0906</h5>
            <a href='https://www.linkedin.com/in/chuang-0906/' target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsFillTelephoneFill className='contact__option-icon'/>
            <h4>Mobile Phone</h4>
            <h5>(778) 773-4984</h5>
            <a href='tel:+1778-773-4984' target="_blank">Leave a message</a>
          </article>
        </div>
        {/* <form action="">
          <input type="text" name="name" placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='4' placeholder='Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact
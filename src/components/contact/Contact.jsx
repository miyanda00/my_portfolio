import React from 'react'
import './contact.css'
import {MdAlternateEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_437r1pi', 'template_hyayi2a', form.current, '1y5CXYhvzsr47ECE3')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <SiMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>miyanda2</h5>
          <a href="https://m.me/miyanda2" target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
          <MdAlternateEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>miyanda742@gmail.com</h5>
          <a href="mailto:miyanda742@gmail.com" target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
          <SiWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+2348160317744</h5>
          <a href="https://api.whatsapp.com/send?phone=+2348160317744" target="_blank">Send a Message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
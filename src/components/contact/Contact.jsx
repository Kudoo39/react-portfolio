import React from 'react'
import "./contact.css"
import {HiOutlineMail} from 'react-icons/hi'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ozfpdf', 'template_s4dohmd', form.current, '_pzIZk3JwjdSmo3yG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">

        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>duykhang3902@gmail.com</h5>
            <a href="mailto:duykhang3902@gmail.com" target="_blank">Send me an Email!</a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+358 40 676 2119</h5>
            <a href="https://api.whatsapp.com/send?phone=358406762119" target="_blank">Send me a message!</a>
          </article>
        </div>
        {/*End of contact*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
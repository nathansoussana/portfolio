import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ogf20vn', 'template_7zi5mgt', form.current, 'OvHNMLeZpHGDSD1OO')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="emailForm">
      {/* Name */}
      <label className="emailFormLabel">Name</label>
      <input type="text" name="from_name"placeholder="John Smith"className="emailFormInput" />
      {/* Email */}
      <label className="emailFormLabel">Email</label>
      <input type="email" name="from_email" placeholder="email@example.com"className="emailFormInput" />
      {/* Message */}
      <label className="emailFormLabel">Message</label>
      <textarea name="message" placeholder="Type your message here..."className="emailFormInput" />
      {/* Submit */}
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  )
}
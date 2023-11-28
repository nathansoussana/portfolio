import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  // const [emailSent, setEmailSent] = useState(false)
  const [emailStatus, setEmailStatus] = useState('')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setEmailStatus('...')

    emailjs.sendForm(
      'service_ogf20vn', 
      'template_7zi5mgt', 
      form.current, 
      'OvHNMLeZpHGDSD1OO'
      )
      .then((result) => {
        console.log(result.text)
        form.current.reset()
        setEmailStatus('Message sent ✓')
      }, (error) => {
        console.log(error.text)
        setEmailStatus('An error occurred. Please try again.')
      })
  }

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className="emailForm"
    >

      <label className="emailFormLabel">
        Name
      </label>
      <input 
        type="text" 
        name="from_name"
        placeholder="John Smith"
        className="emailFormInput" 
      />

      <label className="emailFormLabel">
        Email
      </label>
      <input 
        type="email" 
        name="from_email" 
        placeholder="email@example.com"
        className="emailFormInput" 
      />

      <label className="emailFormLabel">
        Message
      </label>
      <textarea 
        name="message" 
        placeholder="Type your message here..."
        className="emailFormInput" 
      />

      <div className="form-submit">
        <input 
          type="submit" 
          value="Submit" 
          className="btn btn-primary btn-form" 
        />
        {emailStatus && <p className="message-sent">{emailStatus}</p>}
      </div>
    </form>
  )
}
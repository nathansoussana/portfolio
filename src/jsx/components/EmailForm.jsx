import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [emailStatus, setEmailStatus] = useState('')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    const name = form.current.elements.from_name.value
    const email = form.current.elements.from_email.value
    const message = form.current.elements.message.value
  
    // Validate the form fields
    if (!name || !email || !message) {
      setEmailStatus('Please fill in all fields.')
      return
    }
  
    setEmailStatus('Sending...')

    emailjs.sendForm('service_yez8nnm', 'template_7zi5mgt', form.current, 'OvHNMLeZpHGDSD1OO')
      .then((result) => {
        console.log(result.text)
        form.current.reset()
        setEmailStatus('Sent ✓')
      }, (error) => {
        console.log(error.text)
        setEmailStatus('An error occurred. Please try again.')
      })
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="emailForm">

      <label className="emailFormLabel">Name</label>
      <input type="text" name="from_name" placeholder="John Smith" className="emailFormInput" />

      <label className="emailFormLabel">Email</label>
      <input type="email" name="from_email" placeholder="email@example.com"className="emailFormInput" />

      <label className="emailFormLabel">Message</label>
      <textarea name="message" placeholder="Type your message here..."className="emailFormInput" />

      <div className="form-submit">
        <input type="submit" value="Submit" className="btn btn-primary btn-form" />
        { emailStatus && <p className={`message-sent ${emailStatus === 'Please fill in all fields.' ? 'message-error' : ''}`}>{emailStatus}</p> }
      </div>
      
    </form>
  )
}
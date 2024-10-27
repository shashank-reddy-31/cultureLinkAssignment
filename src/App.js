import {useState} from 'react'

import './App.css'

const Form = ({onSubmit}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({name, email, message})
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" >
        Submit
      </button>
    </form>
  )
}

const App = () => {
  const [successMessage, setSuccessMessage] = useState('')

  const handleFormSubmit = formData => {
    console.log('Form Submitted:', formData) // Logging the data for debugging setSuccessMessage('Form submitted successfully!');
  }

  return (
    <div className="App">
      <h1>Contact Form</h1>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <Form onSubmit={handleFormSubmit} />
    </div>
  )
}

export default App

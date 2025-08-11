import './App.css'

function App() {
  return (
    <div className="coming-soon">
      <h1>ZUP! Media is coming soon.</h1>
      <p>But we're already working with bold brands. Get in touch below.</p>
      <form
        action="https://formsubmit.co/contact@zup.digital"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your full name" required />
        <input type="text" name="subject" placeholder="Project topic or idea" required />
        <textarea
          name="message"
          placeholder="Tell us what you need..."
          required
        ></textarea>
        <button type="submit">Send message</button>
      </form>
    </div>
  )
}

export default App

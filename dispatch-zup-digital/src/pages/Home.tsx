import './Home.css'

const Home = () => (
  <div className="home">
    <section className="hero">
      <h1>Romania’s first national taxi dispatch app</h1>
      <p>Real licensed taxis. Transparent pricing. Instant booking.</p>
      <a className="cta" href="#newsletter">Get Started</a>
    </section>

    <section>
      <h2>Why Choose ZUP! Dispatch</h2>
      <ul>
        <li>Nationwide coverage of licensed taxis</li>
        <li>Instant booking via mobile app</li>
        <li>Fair fares linked to official taximeters (no surge pricing)</li>
        <li>Fleet management & analytics for operators</li>
      </ul>
    </section>

    <section>
      <h2>Smart Ride Options</h2>
      <ul>
        <li>ZUP! – Standard ride from nearest taxi station</li>
        <li>ZIP! – Premium comfort ride in cars made after 2017</li>
        <li>ZAP! – Fast pickup from your current location</li>
        <li>ZUP! NOW – Instant booking by tapping a vehicle on the map</li>
      </ul>
    </section>

    <section>
      <h2>Real‑World Validation</h2>
      <ul>
        <li>2nd place at CONAF National Business Competition</li>
        <li>3rd place at Arena Urşilor Pre‑Accelerator</li>
      </ul>
    </section>

    <section>
      <h2>Driver Standards</h2>
      <ul>
        <li>Minimum 12 grades, bac diploma, ≥3 years driving experience</li>
        <li>Clean record, background checks, high hygiene standards</li>
      </ul>
    </section>

    <section>
      <h2>Supported Cities</h2>
      <p>Live in Piatra Neamț, expanding soon to Iași, Cluj, Brașov, Bucharest</p>
    </section>

    <section>
      <h2>FAQ</h2>
      <ul>
        <li>What is ZUP?</li>
        <li>How is ZUP different from Uber/Bolt?</li>
        <li>Payment methods (Card, Apple Pay, Google Pay, Cash)</li>
        <li>How to join as a driver or fleet owner</li>
        <li>How ZIP!, ZAP!, ZUP! NOW work</li>
        <li>Supported cities</li>
      </ul>
    </section>

    <section id="newsletter" className="newsletter">
      <h2>Stay updated and receive bonuses when we launch!</h2>
      <form>
        <input type="email" placeholder="Your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>

    <footer>
      <div className="links">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="#">Cookies</a>
      </div>
      <span>© 2025 ZUP!</span>
      <div className="socials">
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  </div>
)

export default Home

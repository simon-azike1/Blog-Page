
import { useState } from "react"
import "./footer.css"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h4>Stay Updated</h4>
              <p>Get the latest insights on web development, design trends, and tech innovations.</p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span>S.A</span>
              </div>
              <h3>Simon Azike</h3>
            </div>
            <p className="footer-description">
              Empowering developers and designers to build the future of web technology with cutting-edge tools,
              insights, and community-driven innovation.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <span>𝕏</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>⚡</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <span>💬</span>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <span>📺</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#tour">Tour</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#documentation">Documentation</a>
              </li>
              <li>
                <a href="#tutorials">Tutorials</a>
              </li>
              <li>
                <a href="#examples">Examples</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#press">Press Kit</a>
              </li>
              <li>
                <a href="#partners">Partners</a>
              </li>
              <li>
                <a href="#investors">Investors</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} MetaMark. All rights reserved.</p>
          </div>
          <ul className="footer-legal">
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#cookies">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

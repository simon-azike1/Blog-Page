import React from "react"
import './home.css'
import Footer from "../Footer/Footer"

export default function HomePage() {
  return (
   
      <div className="page">
         <section className="hero">
          <div className="container">
            <h1>Welcome to Simon Azike</h1>
            <p>Your gateway to the future of web development and digital innovation</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </section>

        <section className="container">
          <div className="features">
            <div className="feature-card">
              <h3>🚀 Modern Development</h3>
              <p>
                Stay ahead with the latest technologies and frameworks. Learn React, Next.js, and cutting-edge web
                development practices.
              </p>
            </div>
            <div className="feature-card">
              <h3>🎨 Creative Design</h3>
              <p>
                Explore the intersection of design and technology. Create beautiful, functional interfaces that users
                love.
              </p>
            </div>
            <div className="feature-card">
              <h3>🌐 Web 3.0 Ready</h3>
              <p>Dive into the decentralized web. Learn about blockchain, NFTs, and the future of digital ownership.</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Web 3.0 Ready</h3>
              <p>Dive into the decentralized web. Learn about blockchain, NFTs, and the future of digital ownership.</p>
            </div>
          </div>

          <section style={{ textAlign: "center", margin: "4rem 0" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Ready to Start Your Journey?</h2>
            <p style={{ fontSize: "1.25rem", color: "#f8fafeff", marginBottom: "2rem" }}>
              Join thousands of developers and designers who are building the future
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <button className="btn btn-primary">View Blog</button>
              <button className="btn btn-ghost">Take a Tour</button>
            </div>
          </section>
        </section>
      </div>
    
  )
}

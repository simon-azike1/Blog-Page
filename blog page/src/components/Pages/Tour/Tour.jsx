import './tour.css'
import React from 'react'

 function TourPage() {
  const steps = [
    {
      number: 1,
      title: "Discover Amazing Content",
      description:
        "Explore a wide range of articles covering web development, design, and emerging technologies. From beginner tutorials to advanced techniques, find content that matches your skill level and interests.",
    },
    {
      number: 2,
      title: "Learn at Your Own Pace",
      description:
        "Each article is carefully crafted with clear explanations, code examples, and practical tips. Take your time to understand concepts and apply them to your own projects.",
    },
    {
      number: 3,
      title: "Stay Updated",
      description:
        "Subscribe to the newsletter to get notified about new articles, tutorials, and industry insights. Never miss out on the latest trends and best practices in web development.",
    },
    {
      number: 4,
      title: "Join the Community",
      description:
        "Connect with other developers and designers through social media. Share your thoughts, ask questions, and be part of a growing community of tech enthusiasts.",
    },
  ]

  return (
      <div className="page">
        <section className="tour-hero">
          <div className="container">
            <h1>Take a Tour</h1>
            <p>Discover how MetaMark can help you grow as a developer and designer</p>
          </div>
        </section>

        <section className="container">
          <div className="tour-steps">
            {steps.map((step) => (
              <div key={step.number} className="tour-step">
                <div className="step-content">
                  <div className="step-number">{step.number}</div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{step.title}</h3>
                  <p style={{ lineHeight: "1.6", color: "#718096" }}>{step.description}</p>
                </div>
                <div className="step-image">Step {step.number} Illustration</div>
              </div>
            ))}
          </div>

          <section
            style={{
              textAlign: "center",
              margin: "4rem 0",
              padding: "3rem",
              background: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Ready to Get Started?</h2>
            <p style={{ fontSize: "1.125rem", color: "#718096", marginBottom: "2rem" }}>
              Join thousands of developers who are already learning and growing with MetaMark
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn btn-primary">Start Reading</button>
              <button className="btn btn-ghost">Subscribe to Newsletter</button>
            </div>
          </section>
        </section>
      </div>
     )
}

export default TourPage;
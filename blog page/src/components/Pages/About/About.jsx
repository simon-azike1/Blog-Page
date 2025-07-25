import React from "react"
 import './about.css'

 function AboutPage() {
  return (
   
      <div className="page">
        <section className="about-hero">
            <h1>About Simon Azike</h1>
            <p>Writer • Startuper • Designer</p>
       
        </section>

        <section className="container">
          <div className="about-content">
            <div className="profile-card">
              <div className="profile-image">SA</div>
              <h3>Simon Azike</h3>
              <p style={{ color: "#718096", margin: "1rem 0" }}>Full-stack Developer & Digital Innovator</p>
              <div className="skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Web3</span>
                <span className="skill-tag">Design</span>
                <span className="skill-tag">Blockchain</span>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>My Story</h2>
              <p className="para-text">
                I'm a passionate developer and designer who loves exploring the intersection of technology and
                creativity. With over 5 years of experience in web development, I've helped numerous startups and
                companies build their digital presence.
              </p>

              <p className="para-text">
                My journey started with a simple curiosity about how websites work. That curiosity led me down a rabbit
                hole of learning HTML, CSS, JavaScript, and eventually modern frameworks like React and Next.js. Today,
                I'm excited about the possibilities that Web 3.0 and blockchain technology bring to our industry.
              </p>

              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>What I Do</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem"  , color:"white"}} >✨ Full-stack web development</li>
                <li style={{ marginBottom: "0.5rem" , color:"white" }}>🎨 UI/UX design and prototyping</li>
                <li style={{ marginBottom: "0.5rem" , color:"white" }}>📝 Technical writing and blogging</li>
                <li style={{ marginBottom: "0.5rem" , color:"white" }}>🚀 Startup consulting and mentoring</li>
                <li style={{ marginBottom: "0.5rem"  , color:"white"}}>🌐 Web3 and blockchain development</li>
              </ul>

              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" , }}>Let's Connect</h3>
              <p style={{ lineHeight: "1.8" , color:"white"   }}>
                I'm always excited to connect with fellow developers, designers, and entrepreneurs. Whether you want to
                collaborate on a project, discuss the latest tech trends, or just say hello, feel free to reach out!
              </p>
            </div>
          </div>
        </section>
      </div>

  )
}


export default AboutPage;
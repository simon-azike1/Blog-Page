import './blog.css'
import React from 'react'

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      category: "VSCode",
      title: "9 VSCode Extensions You Definitely Need As A Developer",
      description:
        "It would help if you had these extensions to improve your workflow, reduce the number of bugs, and make coding more enjoyable.",
      views: "58.9k",
      likes: "437",
      date: "Nov 8",
    },
    {
      id: 2,
      category: "Linux",
      title: "Simple Commands In Linux That Will Make You Feel Like a Pro",
      description:
        "If you know the basic commands to enter in the terminal, you'll be more comfortable working with Linux systems.",
      views: "22.6k",
      likes: "158",
      date: "Nov 21",
    },
    {
      id: 3,
      category: "JavaScript",
      title: "JavaScript Tips to Improve Your Webpage Performance",
      description: "A few tips that will make visiting your website a more enjoyable experience for your users.",
      views: "765",
      likes: "6",
      date: "Nov 22",
    },
    {
      id: 4,
      category: "Web 3.0",
      title: "Don't Miss The Opportunity that Web 3.0 Gives You",
      description: "What is Web 3.0 and why you should pay attention to it? Also, the future of Blockchain technology.",
      views: "2654",
      likes: "5",
      date: "Nov 24",
    },
  ]

  const categories = ["All", "Coding", "NFT", "Web 3.0", "Crypto", "Design", "Linux", "JavaScript"]

  return (
   
      <div className="page">
        <section className="blog-hero">
          <div className="container">
            <h1>My Blog</h1>
            <p>Thoughts, tutorials, and insights about web development and technology</p>
          </div>
        </section>

        <section className="container">
          <div className="blog-grid">
            <div className="articles">
              {articles.map((article) => (
                <article key={article.id} className="article-card">
                  <div className="article-content">
                    <div className="article-image"></div>
                    <div className="article-info">
                      <span className="article-category">{article.category}</span>
                      <h2 className="article-title">{article.title}</h2>
                      <p className="article-description">{article.description}</p>
                      <div className="article-meta">
                        <span>❤️ {article.likes}</span>
                        <span>👁️ {article.views} Views</span>
                        <span>📅 {article.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>Categories</h3>
                <div className="categories">
                  {categories.map((category) => (
                    <a key={category} href="#" className="category-tag">
                      {category}
                    </a>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Popular Posts</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>React Best Practices 2024</h4>
                    <p style={{ fontSize: "0.75rem", color: "#718096" }}>25.3k views</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>Getting Started with Next.js</h4>
                    <p style={{ fontSize: "0.75rem", color: "#718096" }}>18.7k views</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>CSS Grid vs Flexbox</h4>
                    <p style={{ fontSize: "0.75rem", color: "#718096" }}>12.1k views</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Newsletter</h3>
                <p style={{ fontSize: "0.875rem", marginBottom: "1rem", color: "#718096" }}>
                  Get the latest posts delivered right to your inbox.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <input
                    type="email"
                    placeholder="Your email"
                    style={{
                      padding: "0.5rem",
                      border: "1px solid #e2e8f0",
                      borderRadius: "0.25rem",
                      fontSize: "0.875rem",
                    }}
                  />
                  <button className="btn btn-primary" style={{ fontSize: "0.875rem" }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
  )
}

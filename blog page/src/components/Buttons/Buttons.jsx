 
 import React from "react"
 import '../Buttons/index.css'
 




 
 const buttonPage = () => {
    
  return (
    <div>
      {/* Navigation buttons for demo purposes */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          gap: "10px",
          background: "white",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setCurrentPage("home")}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            background: currentPage === "home" ? "#1a202c" : "#f7fafc",
            color: currentPage === "home" ? "white" : "#4a5568",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
        </button>
        <button
         
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            background: currentPage === "about" ? "#1a202c" : "#f7fafc",
            color: currentPage === "about" ? "white" : "#4a5568",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          About
        </button>
        <button
         
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            background: currentPage === "blog" ? "#1a202c" : "#f7fafc",
            color: currentPage === "blog" ? "white" : "#4a5568",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
        </button>
        <button
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            background: currentPage === "tour" ? "#1a202c" : "#f7fafc",
            color: currentPage === "tour" ? "white" : "#4a5568",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
        </button>
      </div>
    </div>
  )
 }

  export default buttonPage;
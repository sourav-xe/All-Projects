import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1f1f1f",
        color: "#fff",
        padding: "30px 0",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transform: "perspective(1000px)",
      }}
    >
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            borderBottom: "1px solid #444",
            paddingBottom: "15px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#00ffd0",
              textShadow: "2px 2px 6px rgba(0, 255, 208, 0.7)",
              transform: "translateZ(10px)",
            }}
          >
            Sourav
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: "4px 0" }}>Sourav, XYZ Place -12324</p>
            <p style={{ margin: "4px 0" }}>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: "14px",
            opacity: 0.85,
          }}
        >
          <div>
            <p style={{ margin: "0" }}>Developed By Sourav</p>
          </div>
          <div>
            <p style={{ margin: "0" }}>All Rights Reserved By Sourav.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

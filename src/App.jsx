import React, { useState } from "react";
import "./App.css"; // Make sure to create this CSS file

export default function App() {
  const [loading, setLoading] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  /* Show loader */
  function showLoader(callback) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      callback && callback();
    }, 500);
  }

  /* Click handler */
  function handleLinkClick(link, e) {
    e.preventDefault();
    showLoader(() => setActiveLink(link));
  }

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}

      {/* HEADER */}
      <header>
        <div className="logo">LODGIK</div>
        <nav>
          <ul>
            {["home", "semicon", "embedded", "about", "careers", "contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="/"
                    className={activeLink === link ? "active" : ""}
                    onClick={(e) => handleLinkClick(link, e)}
                  >
                    {link === "semicon"
                      ? "Semicon Services"
                      : link === "embedded"
                      ? "Embedded Services"
                      : link === "about"
                      ? "About Us"
                      : link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main>
        {activeLink === "home" && (
          <section className="content-section1">
            {/* Example background image can be added in CSS */}
            <h2>Welcome to the Home Page!</h2>
            <p>
              LODGIK is a leading provider of semiconductor solutions, driving
              innovation and excellence in the tech industry. Explore our
              services and discover how we can help you achieve your goals.
            </p>
          </section>
        )}

        {activeLink === "semicon" && (
          <section className="semicon-section">
            <div className="container">
              <h2 className="semicon-title">
                Our Specialized Semicon Services
              </h2>
              <div className="semicon-cards">
                <div className="card">
                  <div className="icon">📊</div>
                  <h3>Physical Design & STA</h3>
                  <p>
                    Delivering ASIC/SoC projects with RTL-to-GDSII flow
                    including Place & Route (P&R) and Static Timing Analysis.
                  </p>
                </div>

                <div className="card">
                  <div className="icon">🧩</div>
                  <h3>FPGA Design</h3>
                  <p>
                    Prototyping and validation, FPGA targeted RTL design,
                    High-Level Synthesis (HLS), timing analysis, and IP
                    development.
                  </p>
                </div>

                <div className="card">
                  <div className="icon">⚙️</div>
                  <h3>Design for Testability</h3>
                  <p>
                    End-to-end DFT expertise including Scan Design, ATPG,
                    BIST, JTAG, and Fault Simulation.
                  </p>
                </div>

                <div className="card">
                  <div className="icon">💡</div>
                  <h3>IP / SoC Verification</h3>
                  <p>
                    Verification services from test plan creation to coverage
                    closure for IP and SoC.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeLink === "embedded" && <h2 className="page">Embedded Services</h2>}
        {activeLink === "about" && <h2 className="page">About Us</h2>}
        {activeLink === "careers" && <h2 className="page">Careers</h2>}
        {activeLink === "contact" && <h2 className="page">Contact Us</h2>}

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="badge">Semicon Services</div>
            <h1>Semicon Solutions For the Future</h1>
            <p>
              LODGIK is one of the fastest growing Global Semiconductor Design
              Services Organizations.
            </p>
            <div className="btn-group">
              <button className="btn btn-primary">Our Value</button>
              <button className="btn btn-secondary">Read More</button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <h4>Our Offices</h4>
          <p>India - Hyderabad</p>
          <p>USA - San Jose</p>
          <p>Germany - Munich</p>
          <p>Japan - Tokyo</p>
        </div>
      </footer>
    </>
  );
}

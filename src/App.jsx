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
    <section
      className="content-section1"
      style={{
        background: "url('/images/semiconductor.jpg') no-repeat center/cover",
      }}
    >
      <div className="content-wrapper">
        <img src="/images/207042.png" alt="lodgik"></img>
        <h1>Welcome to the Home Page!</h1>
        <p>
          LODGIK is a leading provider of semiconductor solutions, driving
          innovation and excellence in the tech industry. Explore our
          services and discover how we can help you achieve your goals.
        </p>
      </div>
    </section>
  )}
</main>


        {activeLink === "semicon" && (
         
<section className="semicon-section">
 
  <div class="container">

  
    <div class="semicon-header">
      <span class="tag">Semicon Offerings</span>
      <h2>Our <span>Specialized</span> Semicon Services</h2>
    </div>

    
    <div class="semicon-cards">

      <div class="card">
        <div class="icon">📊</div>
        <h3>Physical Design & STA</h3>
        <p>
          Delivering ASIC/SoC projects with RTL-to-GDSII flow including
          Place & Route (P&R) and Static Timing Analysis.
        </p>
      </div>

      <div class="card">
        <div class="icon">🧩</div>
        <h3>FPGA Design</h3>
        <p>
          Prototyping and validation, FPGA targeted RTL design,
          HLS, timing analysis, and IP development.
        </p>
      </div>

      <div class="card">
        <div class="icon">⚙️</div>
        <h3>Design for Testability</h3>
        <p>
          End-to-end DFT expertise including Scan Design,
          ATPG, BIST, JTAG, and Fault Simulation.
        </p>
      </div>

      <div class="card">
        <div class="icon">💡</div>
        <h3>IP / SoC Verification</h3>
        <p>
          Verification services from test plan creation
          to coverage closure for IP and SoC.
        </p>
      </div>

    </div>
  </div>
</section>


        )}

        {activeLink === "embedded" && (
          <h2 className="page">Embedded Services</h2>,
    <section className="embedded-section">
      <div className="content-container">
        <div className="embeded-text">
          <h1>
            Choose <strong>The Best</strong> Semicon Services
          </h1>
          <p>
            At BITSILICA, we are a leading services organization in the Semicon
            and Embedded space, dedicated to delivering cutting-edge solutions
            to our global clients. With a strong focus on quality and customer
            satisfaction, we have rapidly grown to become one of the fastest-growing
            companies in our industry.
          </p>

          <h3>Our Journey:</h3>
          <p>
            Established about six years ago, we have achieved remarkable milestones
            and success. From our humble beginnings, we have grown exponentially,
            serving more than 25+ global customers across multiple geographical
            locations, including India, USA, Singapore, Malaysia, and Vietnam. Our
            commitment to excellence has been the driving force behind our rapid
            growth, and we take pride in our journey of success.
          </p>

          <h3>Expertise and Strength:</h3>
          <p>
            At BITSILICA, our engineering strength is comprised of more than 500+
            highly skilled and dedicated engineers. Our team’s expertise spans
            various domains, including ASIC/RTL Design, IP/SoC Verification,
            Physical Design & STA, FPGA Design, Design for Testability, Device
            Drivers, Multimedia, IoT, Modem, Automotive, Computer Vision, NLP,
            and AI services. We leverage the latest tools, technologies, and
            best practices to deliver innovative and efficient solutions to our
            clients.
          </p>

          <h3>Quality and Customer Focus:</h3>
          <p>
            We are an ISO 9001:2015 certified company, demonstrating our commitment
            to the highest standards of quality and excellence. Customer satisfaction
            is at the core of our business values, and we strive to exceed our
            clients’ expectations by providing them with the highest level of service
            and support. Our strong emphasis on understanding their requirements
            and delivering tailored solutions has made us a trusted partner for many
            semiconductor design companies worldwide.
          </p>

          <h3>Collaborations and Research:</h3>
          <p>
            BITSILICA actively collaborates with renowned universities, fostering
            innovation and staying at the forefront of technology. We have signed
            Memorandums of Understanding (MoUs) with prestigious institutions such
            as IISC-Bengaluru, NIT-AP, GRIET, BVRIT, and other Autonomous Universities.
            Our commitment to research and development is evident through our published
            research papers, with one notable contribution being “Exploring the Machine
            Learning Algorithms for Load Forecasting and Fault Detection in Smart Grids.”
          </p>

          <p>
            Join us in our journey towards excellence in Semicon and Embedded services,
            and experience the commitment, expertise, and innovation that define BITSILICA.
          </p>
        </div>

        <div className="about-image">
          <img
            src="/path-to-your-image/semiconductor.jpg"
            alt="About BITSILICA"
          />
        </div>
      </div>
   </section>
  

      )}
        {activeLink === "about" && (
        
  <div className="aboutcontent-container">
    <div class="about-text">
      <h1>
        Choose <strong>The Best</strong> Semicon Services
      </h1>
      <p>
        At BITSILICA, we are a leading services organization in the Semicon
        and Embedded space, dedicated to delivering cutting-edge solutions
        to our global clients. With a strong focus on quality and customer
        satisfaction, we have rapidly grown to become one of the fastest-growing
        companies in our industry.
      </p>

      <h3>Our Journey:</h3>
      <p>
        Established about six years ago, we have achieved remarkable milestones
        and success. From our humble beginnings, we have grown exponentially,
        serving more than 25+ global customers across multiple geographical
        locations, including India, USA, Singapore, Malaysia, and Vietnam. Our
        commitment to excellence has been the driving force behind our rapid
        growth, and we take pride in our journey of success.
      </p>

      <h3>Expertise and Strength:</h3>
      <p>
        At BITSILICA, our engineering strength is comprised of more than 500+
        highly skilled and dedicated engineers. Our team’s expertise spans
        various domains, including ASIC/RTL Design, IP/SoC Verification,
        Physical Design & STA, FPGA Design, Design for Testability, Device
        Drivers, Multimedia, IoT, Modem, Automotive, Computer Vision, NLP,
        and AI services. We leverage the latest tools, technologies, and
        best practices to deliver innovative and efficient solutions to our
        clients.
      </p>

      <h3>Quality and Customer Focus:</h3>
      <p>
        We are an ISO 9001:2015 certified company, demonstrating our
        commitment to the highest standards of quality and excellence.
        Customer satisfaction is at the core of our business values, and
        we strive to exceed our clients’ expectations by providing them
        with the highest level of service and support. Our strong emphasis
        on understanding their requirements and delivering tailored solutions
        has made us a trusted partner for many semiconductor design companies
        worldwide.
      </p>

      <h3>Collaborations and Research:</h3>
      <p>
        BITSILICA actively collaborates with renowned universities, fostering
        innovation and staying at the forefront of technology. We have signed
        Memorandums of Understanding (MoUs) with prestigious institutions such
        as IISC-Bengaluru, NIT-AP, GRIET, BVRIT, and other Autonomous Universities.
        Our commitment to research and development is evident through our published
        research papers, with one notable contribution being “Exploring the Machine
        Learning Algorithms for Load Forecasting and Fault Detection in Smart Grids.”
      </p>

      <p>
        Join us in our journey towards excellence in Semicon and Embedded services,
        and experience the commitment, expertise, and innovation that define BITSILICA.
      </p>
    </div>

     <div className="about-image">
    <img src="/images/aboutus.jpg" alt="About Us" />
  </div>
  </div> 
  

      )}
       {activeLink === "careers" && (
  
<div class="container">
        <h1>Frontend Developer</h1>
        <p><strong>Location:</strong> Remote</p>
        <p><strong>Job Type:</strong> Full-time</p>

        <h2>About the Role</h2>
        <p>We are looking for a talented Frontend Developer to join our dynamic team. You will be responsible for building beautiful, responsive, and user-friendly web applications.</p>

        <h2>Responsibilities</h2>
        <ul>
            <li>Develop and maintain web applications using HTML, CSS, and JavaScript.</li>
            <li>Collaborate with designers and backend developers.</li>
            <li>Ensure the technical feasibility of UI/UX designs.</li>
            <li>Optimize applications for maximum speed and scalability.</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
            <li>Proven experience in frontend development.</li>
            <li>Strong knowledge of HTML, CSS, and JavaScript.</li>
            <li>Experience with frameworks like React or Angular is a plus.</li>
            <li>Good problem-solving skills and attention to detail.</li>
        </ul>

        <h2>Benefits</h2>
        <ul>
            <li>Competitive salary</li>
            <li>Flexible working hours</li>
            <li>Remote work options</li>
            <li>Health insurance</li>
        </ul>

        <a href="mailto:jobs@example.com" class="apply-button">Apply Now</a>
    </div>

               )}      
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

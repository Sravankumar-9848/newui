import React from "react";
import "./SemiconServices.css";
function SemiconServices() {
  return (
    <section className="semicon-section">
      <div className="container">

        <h2 className="semicon-title">Our Specialized Semicon Services</h2>

        <div className="semicon-cards">

          <div className="card">
            <div className="icon">📊</div>
            <h3>Physical Design &amp; STA</h3>
            <p>
              Delivering ASIC/SoC projects with RTL-to-GDSII flow including
              Place &amp; Route (P&amp;R) and Static Timing Analysis.
            </p>
          </div>

          <div className="card">
            <div className="icon">🧩</div>
            <h3>FPGA Design</h3>
            <p>
              Prototyping and validation, FPGA targeted RTL design,
              High-Level Synthesis (HLS), timing analysis, and IP development.
            </p>
          </div>

          <div className="card">
            <div className="icon">⚙️</div>
            <h3>Design for Testability</h3>
            <p>
              End-to-end DFT expertise including Scan Design,
              ATPG, BIST, JTAG, and Fault Simulation.
            </p>
          </div>

          <div className="card">
            <div className="icon">💡</div>
            <h3>IP / SoC Verification</h3>
            <p>
              Verification services from test plan creation
              to coverage closure for IP and SoC.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SemiconServices;

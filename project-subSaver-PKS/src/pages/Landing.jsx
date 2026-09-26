import React from 'react'
import "./Landing.css"

const Landing = () => {
  return (
    <div className="landing">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Sub<span>Saver</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="/login" className='login-btn'>Login</a>
          <a href="/register" className="signup-btn">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <div className="badge">
            Built for roommates & co-living
          </div>

          <h1>
            Share expenses.
            <br />
            <span>Not the headache.</span>
          </h1>

          <p>
            SubSaver makes shared subscriptions, recurring bills,
            roommate expenses and settlements simple.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started →
            </button>

            <button className="secondary-btn">
              See how it works
            </button>
          </div>

        </div>

        {/* Dashboard preview */}
        <div className="dashboard-preview">
          <div className="preview-header">
            <div>
              <small>Monthly shared spending</small>
              <h2>₹2,840</h2>
            </div>

            <div className="status">
              ● All settled
            </div>
          </div>

          <div className="preview-card">
            <div>
              <strong>Netflix</strong>
              <small>Next payment · 24 Aug</small>
            </div>

            <strong>₹649</strong>
          </div>

          <div className="preview-card">
            <div>
              <strong>Wi-Fi</strong>
              <small>Next payment · 27 Aug</small>
            </div>

            <strong>₹899</strong>
          </div>

          <div className="preview-card">
            <div>
              <strong>Spotify</strong>
              <small>Next payment · 30 Aug</small>
            </div>

            <strong>₹199</strong>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">

        <div className="section-heading">
          <p>WHY SUBSAVER?</p>
          <h2>Designed for shared living.</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">↻</div>
            <h3>Payment Rotation</h3>
            <p>
              Automatically rotate who pays recurring bills
              each month.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">◉</div>
            <h3>Renewal Pulse</h3>
            <p>
              Ask everyone before a subscription renews
              whether they still want it.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚖</div>
            <h3>Debt Nullification</h3>
            <p>
              Offset debts across expenses and reduce
              unnecessary money transfers.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Landing
import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="dashboard-logo">
          Sub<span>Saver</span>
        </div>

        <nav>
          <a className="active" href="/dashboard">Dashboard</a>
          <a href="/groups">Groups</a>
          <a href="/subscriptions">Subscriptions</a>
          <a href="/expenses">Expenses</a>
          <a href="/balances">Balances</a>
          <a href="/simulator">Simulator</a>
        </nav>

        <div className="sidebar-bottom">
          <a href="/settings">Settings</a>
          <a href="/">Logout</a>
        </div>
      </aside>

      {/* Main content */}
      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <h1>Good morning 👋</h1>
            <p>Here's what's happening with your shared finances.</p>
          </div>

          <div className="profile">
            <div className="notification">🔔</div>
            <div className="avatar">A</div>
          </div>
        </header>

        {/* Summary cards */}
        <section className="summary-grid">

          <div className="summary-card">
            <span>My Groups</span>
            <strong>2</strong>
            <small>Active groups</small>
          </div>

          <div className="summary-card">
            <span>Monthly Spending</span>
            <strong>₹2,840</strong>
            <small>Shared subscriptions</small>
          </div>

          <div className="summary-card">
            <span>My Balance</span>
            <strong className="positive">+₹350</strong>
            <small>You're owed</small>
          </div>

          <div className="summary-card">
            <span>Upcoming</span>
            <strong>3</strong>
            <small>Payments this month</small>
          </div>

        </section>

        {/* Dashboard content */}
        <section className="dashboard-grid">

          {/* Upcoming payments */}
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h2>Upcoming Payments</h2>
                <p>Your next shared bills</p>
              </div>

              <a href="/subscriptions">View all</a>
            </div>

            <div className="payment-item">
              <div className="payment-icon">N</div>
              <div className="payment-info">
                <strong>Netflix</strong>
                <span>Aug 24 · Rahul pays</span>
              </div>
              <strong>₹649</strong>
            </div>

            <div className="payment-item">
              <div className="payment-icon">W</div>
              <div className="payment-info">
                <strong>Wi-Fi</strong>
                <span>Aug 27 · You pay</span>
              </div>
              <strong>₹899</strong>
            </div>

            <div className="payment-item">
              <div className="payment-icon">S</div>
              <div className="payment-info">
                <strong>Spotify</strong>
                <span>Aug 30 · Aman pays</span>
              </div>
              <strong>₹199</strong>
            </div>
          </div>

          {/* Payment rotation */}
          <div className="dashboard-card rotation-card">

            <div className="card-header">
              <div>
                <h2>Payment Rotation</h2>
                <p>Flat 302 · Netflix</p>
              </div>

              <span className="rotation-status">Active</span>
            </div>

            <div className="current-payer">
              <span>Current payer</span>
              <strong>Rahul</strong>
            </div>

            <div className="rotation-line">
              <div className="rotation-member done">A</div>
              <div className="line"></div>
              <div className="rotation-member current">R</div>
              <div className="line"></div>
              <div className="rotation-member">N</div>
              <div className="line"></div>
              <div className="rotation-member">S</div>
            </div>

            <p className="next-payer">
              Next month: <strong>You</strong>
            </p>

          </div>

        </section>

        {/* Renewal pulse */}
        <section className="renewal-card">

          <div>
            <span className="renewal-label">RENEWAL PULSE</span>
            <h2>Netflix renews in 4 days</h2>
            <p>
              Tell your group if you want to keep using it next month.
            </p>
          </div>

          <div className="renewal-actions">
            <button className="keep-btn">✓ Keep Me</button>
            <button className="drop-btn">Drop Me</button>
          </div>

        </section>

      </main>

    </div>
  )
}

export default Dashboard
import React from 'react'
import "./Groups.css";

const Groups = () => {
  return (
      <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="dashboard-logo">
          Sub<span>Saver</span>
        </div>

        <nav>
          <a href="/dashboard">Dashboard</a>
          <a className="active" href="/groups">Groups</a>
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

      {/* Main */}
      <main className="dashboard-main">

        <header className="groups-header">
          <div>
            <h1>My Groups</h1>
            <p>Manage your shared living spaces and roommates.</p>
          </div>

          <button className="new-group-btn">
            + New Group
          </button>
        </header>

        {/* Groups */}
        <section className="groups-grid">

          <div className="group-card">
            <div className="group-card-top">
              <div className="group-icon">🏠</div>

              <button className="more-btn">⋮</button>
            </div>

            <h2>Flat 302</h2>

            <p className="group-description">
              Our apartment group
            </p>

            <div className="group-stats">
              <div>
                <strong>4</strong>
                <span>Members</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Subscriptions</span>
              </div>

              <div>
                <strong>₹2,840</strong>
                <span>Monthly</span>
              </div>
            </div>

            <div className="group-members">
              <div className="member">A</div>
              <div className="member">R</div>
              <div className="member">N</div>
              <div className="member">S</div>
            </div>

            <button className="view-group-btn">
              View Group →
            </button>
          </div>


          <div className="group-card">

            <div className="group-card-top">
              <div className="group-icon">🎓</div>

              <button className="more-btn">⋮</button>
            </div>

            <h2>College Apartment</h2>

            <p className="group-description">
              College roommates
            </p>

            <div className="group-stats">
              <div>
                <strong>3</strong>
                <span>Members</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Subscriptions</span>
              </div>

              <div>
                <strong>₹1,200</strong>
                <span>Monthly</span>
              </div>
            </div>

            <div className="group-members">
              <div className="member">A</div>
              <div className="member">K</div>
              <div className="member">P</div>
            </div>

            <button className="view-group-btn">
              View Group →
            </button>
          </div>


          {/* Create group card */}

          <button className="create-group-card">
            <div className="create-icon">+</div>
            <strong>Create a new group</strong>
            <span>Start sharing expenses with roommates</span>
          </button>

        </section>

      </main>
    </div>
  )
}

export default Groups
import React from 'react'
import "./Register.css";

const Register = () => {
  return (
   <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          Sub<span>Saver</span>
        </div>

        <h1>Create your account</h1>

        <p className="auth-subtitle">
          Start managing your shared finances.
        </p>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button className="auth-btn" type="submit">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?
          <a href="/login"> Sign in</a>
        </p>

      </div>
    </div>
  )
}

export default Register
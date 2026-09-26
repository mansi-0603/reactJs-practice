import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
      <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          Sub<span>Saver</span>
        </div>

        <h1>Welcome back</h1>

        <p className="auth-subtitle">
          Sign in to manage your shared finances.
        </p>

        <form>

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
              placeholder="Enter your password"
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button className="auth-btn" type="submit">
            Sign in
          </button>

        </form>

        <p className="auth-footer">
          Don't have an account?
          <a href="/register"> Create one</a>
        </p>

      </div>

    </div>
    </div>
    
  )
}

export default Login
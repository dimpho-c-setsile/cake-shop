import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">
          Login to continue shopping
        </p>

        <form className="login-form">
          
          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button className="login-btn">
            Sign In
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account?{" "}
          <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}


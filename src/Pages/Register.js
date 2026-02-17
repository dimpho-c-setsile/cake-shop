import "./Register.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">
          Join us and start shopping today
        </p>

        <form className="register-form">

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Dimpho Setsile"
            />
          </div>

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

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
            />
          </div>

          {/* Button */}
          <button className="register-btn">
            Register
          </button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

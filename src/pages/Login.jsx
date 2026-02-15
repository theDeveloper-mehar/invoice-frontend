/* Explanation

Login Page 
This page handles user authentication and collects email,password from user.
sends them to backend using API.
stores the JWT token in local storage.
After succesfull login ,redirected to invoces pages
*/





import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/invoices");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign In</h2>
        <p className="subtitle">
          Enter your credentials to access your invoices
        </p>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;

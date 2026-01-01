import React from "react";

function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Email:</label><br />
          <input type="email" />
        </div>

        <div>
          <label>Password:</label><br />
          <input type="password" />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

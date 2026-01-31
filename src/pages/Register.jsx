import { useState } from "react";
import api from "../api";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/auth/register", {
        username,
        email,
        password
      });

      setMsg("User registered successfully!");
    } catch (err) {
      setMsg(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        /><br/><br/>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        /><br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        /><br/><br/>

        <button type="submit">Register</button>
      </form>

      <p>{msg}</p>
    </div>
  );
};

export default Register;

import { useState } from "react";
import axios from "axios";

export default function Log() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://authbackend-1ssp.onrender.com/api/auth/login",
        form
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("Login Successful!");
      } else {
        alert(res.data.error || "Login failed");
      }
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

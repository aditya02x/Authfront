import { useState } from "react";
import axios from "axios";

export default function Log() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("Login Successful!");
      } else {
        alert(res.data.error || "Login failed");
      }

    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>

      <input
        style={styles.input}
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    width: "90%",          // responsive width
    margin: "40px auto",
    padding: "30px",
    borderRadius: "10px",
    background: "#f2f2f2",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  title: {
    marginBottom: "20px",
    fontSize: "1.8rem"
  },
  input: {
    width: "95%",
    margin: "10px 0",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid gray",
    fontSize: "1rem"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "6px",
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "1rem"
  }
};

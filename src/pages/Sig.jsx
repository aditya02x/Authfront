import { useState } from "react";
import axios from "axios";

export default function Sig() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://authbackend-1ssp.onrender.com/api/auth/register",
        form
      );
      alert(res.data.message);
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Signup</h2>

      <input
        style={styles.input}
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

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

      <button style={styles.button} onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "80px auto",
    padding: "30px",
    borderRadius: "10px",
    background: "#f2f2f2",
    textAlign: "center"
  },
  title: { marginBottom: "20px" },
  input: {
    width: "90%",
    margin: "10px 0",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid gray"
  },
  button: {
    width: "95%",
    padding: "12px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "6px",
    marginTop: "10px",
    cursor: "pointer"
  }
};

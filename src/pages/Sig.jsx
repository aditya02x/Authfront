import { useState } from "react";
import axios from "axios";

export default function Sig() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://authbackend-1ssp.onrender.com/api/auth/register",
        form
      );
      alert(res.data.message);
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}

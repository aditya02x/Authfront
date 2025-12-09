import { useState } from "react";
import Signup from "./pages/Sig";
import Login from "./pages/Log";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={() => setShowLogin(false)}>Signup</button>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>

      {showLogin ? <Login /> : <Signup />}
    </div>
  );
}

export default App;

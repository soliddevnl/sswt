import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello!");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/hello?name=UAT Tester`, {
      headers: {
        Authorization: `Bruh`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;

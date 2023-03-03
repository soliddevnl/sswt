import { useEffect, useState } from "react";
import "./App.css";
import { getConfig } from "../config";
const config = getConfig();

function App() {
  const [message, setMessage] = useState("Hello!");

  useEffect(() => {
    fetch(`${config.apiUrl}/api/v1/hello?name=UAT Tester`, {
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

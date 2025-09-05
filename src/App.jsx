import { useEffect, useState } from "react";

export default function App() {
  const [health, setHealth] = useState("loading...");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/api/health`)
      .then(r => r.json())
      .then(d => setHealth(JSON.stringify(d)))
      .catch(e => setHealth("error: " + e.message));
  }, []);
  return <pre>API health: {health}</pre>;
}


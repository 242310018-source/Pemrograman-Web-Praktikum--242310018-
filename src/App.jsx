import { useState } from "react";
import Clock from "./component/Clock";
import ThemeToggle from "./component/ThemeToggle";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="card">
        <h1>🕒 Digital Clock</h1>

        <Clock />

        <p className="date">{today}</p>

        <p className="mode">
          {darkMode ? "🌙 Dark Mode Aktif" : "☀️ Light Mode Aktif"}
        </p>

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </div>
  );
}

export default App;
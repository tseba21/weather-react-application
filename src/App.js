import React from "react";
import Weather from "./weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Addis Ababa" />
      </div>
    </div>
  );
}

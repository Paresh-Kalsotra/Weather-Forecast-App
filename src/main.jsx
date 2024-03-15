import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import App from "./App.jsx";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

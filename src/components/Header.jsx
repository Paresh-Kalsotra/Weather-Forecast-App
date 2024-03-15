import React from "react";

function Header() {
  return (
    <header
      style={{
        padding: "2%",
      }}
    >
      <h3 style={{ display: "flex", alignItems: "center", color: "#113946" }}>
        <img src="logo.png" alt="logo" style={{ height: "4vh" }} /> Weather
        Forecast App
      </h3>
    </header>
  );
}

export default Header;
